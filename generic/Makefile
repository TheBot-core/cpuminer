CPPSRC = $(shell find -name '*.c')
OBJS = $(addsuffix .o,$(basename $(CPPSRC)))

CC = gcc
LD = ld

CFLAGS_INT = -I../core/include -O3 $(CFLAGS)
LDFLAGS = -r

arch.o: $(OBJS)
	@echo LD $^
	@$(LD) $(LDFLAGS) -o $@ $^

%.o: %.c
	@echo CC $^
	@$(CC) $(CFLAGS_INT) -c -o $@ $^

clean:
	rm $(OBJS) arch.o
