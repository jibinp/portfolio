---
title: "Debugging across the hardware–firmware line: prove it, don't guess"
summary: "The hardest bugs on a connected product sit between the board and the code, and each side blames the other. Lessons from years of board-level fault finding and today's firmware work: how to find the real root cause and prove it."
tags: ["Debugging", "Firmware", "Hardware", "FreeRTOS", "Bring-up"]
readMin: 4
order: 0
---

Most bugs are easy to place. The code is wrong, or the board is wrong. The expensive ones sit on the line between the two. The firmware team says it is the hardware, the hardware team says it is the firmware, and the product waits.

I have worked on both sides of that line. For years I traced faults on laptop and desktop motherboards down to a single failed part, with a schematic in one hand and an oscilloscope probe in the other. Today I lead firmware development and hardware bring-up for railway and industrial IoT products, and I still debug hands-on. The habits from the first job are the ones I use most in the second.

## Start from the symptom, not the suspect

Every fault starts as a symptom someone saw: a port that stays silent, a reading that flattens out, a device that crashes after setup. The trap is to jump straight to the part you already distrust.

On an RS485 port that sent nothing at all, the Modbus driver was the obvious suspect. It looked right, and it was right. The real cause was the order in which the STM32's USART kernel clock was set up, which left the peripheral unclocked. A fix in the start-up sequence, not in the protocol.

The symptom said "no signal on the pin". Probing the pin with a scope and walking back from there found it faster than rereading the driver would have.

## Measure on both sides of the line

When a fault could be hardware or firmware, measure where they meet.

A current channel on one board read correctly at low values and then flattened out well below full scale. It looked like an ADC or scaling problem in the firmware. Measuring the analog front end showed the op-amp running out of output swing before the ADC ever saw the signal.

![Illustration: the op-amp output flattens at its swing limit, well below the ADC's full-scale input](/portfolio/img/articles/opamp-clipping.svg)

The firmware was fine. The hardware team got exact headroom numbers for the next board revision, which saved weeks of firmware workarounds and kept the prototype delivery on schedule. One measurement at the boundary settled an argument that could have gone on for weeks.

## Prove it, don't guess it

A guess that happens to work is still a guess, and it comes back in the field.

When a device crashed right after setup, the easy answer was "make the stacks bigger and see". Instead, I added a HardFault handler that captures the stacked PC and LR, plus a FreeRTOS stack-overflow hook, and used the compiler's `.su` stack-usage files and the linker `.map` file to show which task overflowed and why. The stacks were then sized from evidence, and the production firmware stayed stable.

On a shared SPI flash used by three FreeRTOS tasks, the lock covered only part of each operation, so another task could slip in between a command and its read. Locking the whole operation fixed it, and a test report, not a hunch, closed it.

## Catch it before the hardware does

The cheapest bug is the one found before a board is on the bench. Python device simulators let firmware talk to a realistic peer long before the real hardware exists. Endurance tests with formal test reports then check the behaviour that matters in the field, such as power loss and long radio outages, before a release goes out.

## Building a proof-first team

At the board-repair bench I kept a problem-and-solution log of recurring faults, and the next technician who saw the same symptom found the cause in minutes. Today the same log runs across my engineering team: every root cause gets a short entry with the symptom, the measurement at the boundary, the real cause and the test that verified the fix. It has cut repeat bring-up issues across projects.

The same rule applies when I review a teammate's code or sign off a board revision: "it works now" is not accepted on its own. It needs a scope trace, a fault log or a test report behind it.

Tools and chips change every few years. This way of working does not, and it is the most useful thing my years on both sides of the line have taught me.
