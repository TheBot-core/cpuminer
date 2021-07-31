ASSRC = $(shell find -name '*.S')
OBJS = $(addsuffix .o,$(basename $(ASSRC)))

AS = as
LD = ld

ASFLAGS =
LDFLAGS = -r

arch.o: $(OBJS)
	@echo LD $^
	@$(LD) $(LDFLAGS) -o $@ $^

%.o: %.S
	@echo AS $^
	@$(AS) $(ASFLAGS) -c -o $@ $^

clean:
	rm $(OBJS) arch.o