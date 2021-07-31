CPPSRC = $(shell find -name '*.c')
OBJS = $(addsuffix .o,$(basename $(CPPSRC)))

CC = gcc
LD = ld

CFLAGS = -Iinclude -O3
LDFLAGS = -r

core.o: $(OBJS)
	@echo LD $^
	@$(LD) $(LDFLAGS) -o $@ $^

%.o: %.c
	@echo CC $^
	@$(CC) $(CFLAGS) -c -o $@ $^

clean:
	rm $(OBJS) core.o