---
title: "Debugging across the hardware–firmware line: prove it, don't guess"
summary: "The hardest bugs on a connected product sit between the board and the code, and each side blames the other. Lessons from years of board-level fault finding and today's firmware work: how to find the real root cause and prove it."
tags: ["Debugging", "Firmware", "Hardware"]
readMin: 5
order: 0
---

Most bugs are easy to place. The code is wrong, or the board is wrong. The expensive ones sit on the line between the two. The firmware team says it is the hardware, the hardware team says it is the firmware, and the product waits.

I have worked on both sides of that line. For years I traced faults on laptop and desktop motherboards down to a single failed part, with a schematic in one hand and an oscilloscope probe in the other. Today I write and review firmware for connected devices. The habits from the first job are the ones I use most in the second.

## Start from the symptom, not the suspect

Every fault starts as a symptom someone saw: a port that stays silent, a reading that flattens out, a device that crashes after setup. The trap is to jump straight to the part you already distrust.

On an RS485 port that sent nothing at all, the Modbus driver was the obvious suspect. It looked right, and it was right. The real cause was the order in which the microcontroller's peripheral clock was set up, which left the port unclocked. A fix in the start-up sequence, not in the protocol.

The symptom said "no signal on the pin". Measuring at the pin, and walking back from there, found it faster than rereading the driver would have.

## Measure on both sides of the line

When a fault could be hardware or firmware, measure where they meet.

A current channel on one board read correctly at low values and then flattened out well below full scale. It looked like an ADC or scaling problem in the firmware. Measuring the analog front end showed the op-amp running out of output swing before the ADC ever saw the signal. The firmware was fine. The hardware team got a specific change for the next board revision instead of a vague "readings are wrong".

One measurement at the boundary settled an argument that could have gone on for weeks.

## Prove it, don't guess it

A guess that happens to work is still a guess, and it comes back in the field.

When a device crashed right after setup, the easy answer was "make the stacks bigger and see". Instead, I added code to capture where the crash happened, plus a stack-overflow check, and used the compiler's own stack-usage and memory-map data to show which task overflowed and why. The stack sizes were then set from evidence, and the firmware stayed stable.

The same rule applied to a shared flash chip used by three tasks. Data read back as garbage now and then. The cause was locking that covered only part of each flash operation, so another task could slip in between a command and its read. The fix was to lock the whole operation, and a test report, not a hunch, closed it.

## Write down every root cause

At the board-repair bench I kept a problem-and-solution log of recurring faults. It turned one person's experience into the team's: the next technician who saw the same symptom found the cause in minutes.

I do the same with firmware. Each root cause gets a short note: the symptom, what was measured, the real cause and the fix. Over time, that log becomes the fastest debugging tool the team has.

## What I look for in a good debugger

- **They describe the symptom exactly** before naming a cause.
- **They measure at the boundary** instead of defending their side.
- **They can show the evidence**: a scope capture, a fault address, a test report.
- **They write it down**, so the same bug is never solved twice.

Tools and chips change every few years. This way of working does not, and it is the most useful thing my years on both sides of the line have taught me.
