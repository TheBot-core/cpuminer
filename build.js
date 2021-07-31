const { execSync } = require("child_process");

const arch_list = {
	"arm": {
		subdir: "arm"
	},
	"i386": {
		subdir: "x86"
	},
	"i486": {
		subdir: "x86"
	},
	"i586": {
		subdir: "x86"
	},
	"i686": {
		subdir: "x86"
	},
	"x86_64": {
		subdir: "x86_64"
	},
	"ppc": {
		subdir: "ppc"
	}
};

function make(folder) {
	var command = "make -C " + folder;
	console.log("Running: " + command);

	execSync(command);
}

const arch = execSync("arch").toString().replace("\n", "");

var arch_dir = "";

if (arch_list[arch] == undefined) {} else {
	arch_dir = arch_list[arch].subdir;
	make(arch_dir);
}

make("generic " + (arch_dir != "" ? "CFLAGS=-DUSE_ASM" : ""));
make("core");

var ld_command = "gcc ./generic/arch.o ./core/core.o -o minerd.elf -lcurl -lpthread";

if (arch_dir != "") {
	ld_command += " ./" + arch_dir + "/arch.o";
}

console.log("Running: " + ld_command);
execSync(ld_command);

make("generic clean");
make("core clean");

if (arch_dir != "") {
	make(arch_dir + " clean");
}

console.log("Thanks to https://github.com/pooler/cpuminer for this awesom miner!");