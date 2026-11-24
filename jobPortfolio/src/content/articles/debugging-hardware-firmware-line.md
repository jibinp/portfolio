---
title: "Debugging across the hardware–firmware line: prove it, don't guess it"
summary: "The costliest bugs on a connected product live where the board meets the code, and each side looks sound on its own. Lessons from years of board-level fault finding and from leading firmware and hardware bring-up today: how to isolate the true root cause, and prove it."
tags: ["Debugging", "Firmware", "Hardware", "FreeRTOS", "Bring-up"]
readMin: 4
image: "/img/articles/debugging-og.png"
order: 0
---

Most defects are easy to attribute: either the code is wrong or the board is. The costly ones hide at the seam between the two, where the firmware looks correct, the board looks correct, and the product still fails.

![Illustration: hardware on one side, firmware on the other, and the costly bugs at the boundary where they meet](/portfolio/img/articles/debug-boundary.svg)

I have worked on both sides of that seam. For years I traced faults on motherboards down to a single failed component, a schematic in one hand and an oscilloscope probe in the other. Today I lead embedded firmware development and hardware bring-up for railway and industrial IoT products, and I debug hands-on. The discipline I built at the repair bench carries straight into that work.

## Start from the symptom, not the suspect

Every fault begins as an observation: a port that stays silent, a reading that plateaus, a device that crashes moments after setup. The temptation is to go straight for the component you already distrust. Resist it.

On one board, an RS485 port transmitted nothing at all. The Modbus driver was the obvious suspect; it looked right, and it was right. The real culprit was the order in which the STM32's USART kernel clock was configured, which left the peripheral unclocked. The fix lived in the start-up sequence, not in the driver.

The symptom was unambiguous: no signal on the pin. Probing that pin with a scope and working backwards found the cause far sooner than another read-through of the driver would have.

## Measure on both sides of the line

When a fault could be hardware or firmware, measure precisely where the two meet.

A current channel read accurately at low values, then plateaued well short of full scale. It looked like an ADC or scaling bug in the firmware. Measuring the analog front end revealed otherwise: the op-amp was hitting its output-swing limit below the ADC's full-scale input.

![Illustration: the op-amp output flattens at its swing limit, well below the ADC's full-scale input](/portfolio/img/articles/opamp-clipping.svg)

The firmware was sound, and the hardware team got exact headroom figures for the next board revision. That avoided weeks of firmware workarounds and kept the prototype delivery on schedule. A single measurement at the boundary settled the question.

## Prove it, don't guess it

A guess that happens to work is still a guess, and guesses have a habit of resurfacing in the field.

When a device crashed shortly after setup, the expedient answer was to enlarge the stacks and hope. Instead, I added a HardFault handler that captures the stacked PC and LR, alongside a FreeRTOS stack-overflow hook. The hook identified the offending task; the compiler's `.su` stack-usage files and the linker `.map` file explained why. The stacks were then sized from evidence, and the production firmware has remained stable since.

![Illustration: from the crash to the HardFault handler, the stack-overflow hook, the .su and .map files, and stacks sized from evidence](/portfolio/img/articles/crash-evidence.svg)

On another board, settings occasionally read back as garbage from an SPI flash shared by three FreeRTOS tasks. The lock spanned only part of each operation, so another task could slip in between a command and its read. Extending the lock across the whole operation cured it, and a test report, not intuition, closed the issue.

![Illustration: with a partial lock, another task slips in between a command and its read; with the lock across the whole operation, it waits its turn](/portfolio/img/articles/flash-lock.svg)

## Catch it before the field does

The cheapest bug is the one found before a board ever reaches the bench. Our Python device simulators let firmware talk to a realistic peer well before the real hardware is ready. Endurance tests, documented in formal test reports, then exercise the behaviour that matters in the field, such as power loss and prolonged radio outages, before any release ships.

## Build a proof-first team

At the repair bench I kept a problem-and-solution log of recurring faults, so the next technician to meet the same symptom found the cause in minutes. My engineering team now keeps the same kind of log: every root cause earns a short entry recording the symptom, the measurement at the boundary, the true cause and the test that verified the fix. It has cut repeat bring-up issues across projects.

![Illustration: the proof-first loop of symptom, measurement at the boundary, root cause, verifying test and log entry](/portfolio/img/articles/proof-loop.svg)

When I review a teammate's code or sign off on a board revision, I don't accept "it works now" on its own. It needs a scope trace, a fault log or a test report behind it.

Tools and chips turn over every few years; this way of working endures. It is the most valuable lesson my years on both sides of the line have taught me.
