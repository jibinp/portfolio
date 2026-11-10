---
title: "AI-assisted firmware: let the tests decide"
summary: "I use Claude Code for firmware, gateway and web work. It makes me faster, but only because nothing it writes counts as done until a test or a formal test report says so."
tags: ["AI-assisted engineering", "Firmware", "Testing"]
readMin: 4
order: 6
---

I use an AI coding assistant (Claude Code) every day: on STM32 firmware, on a Python station gateway, and on web apps. People often ask whether that is safe for embedded work, where a wrong line can brick a board in the field.

My answer: it is safe exactly to the degree that your tests are good.

## Fast at the parts that are slow for people

The assistant is genuinely good at the work that used to take most of my time:

- **Reading a large codebase quickly** and pointing at where a value is set, used and changed.
- **Writing the boring but necessary code:** parsers, frame builders, logging, configuration handling, test scaffolding.
- **Drafting tools around the firmware:** simulators, log analysers and small dashboards that would never get written otherwise.

## Where it needs a firm hand

Embedded work has failure modes an assistant cannot see from the code alone:

- **Hardware timing and clock trees.** A peripheral can look perfectly configured and still sit unclocked because of the order the clocks were set up.
- **Concurrency on shared hardware.** Two RTOS tasks can share a flash chip safely for weeks until one slips in between another's command and its read.
- **Analog reality.** A reading that clips early can be an op-amp's output swing, not a firmware bug at all.

None of these show up in a code review, by a person or by an AI. They show up on a bench, under test.

## My rule: nothing is done until a test says so

Every change, whoever or whatever wrote it, has to pass something that can fail:

- **Unit tests** for logic: frame encoding and decoding, conversions, state machines. My personal web platform has around 420 of them.
- **Simulators** for anything that talks to hardware, so protocol changes can be tested before a board is on the desk.
- **Formal test reports** for behaviour that matters in the field. On a railway field unit, the flash event storage had to survive a 74-hour radio outage: 568 of 568 events stored and delivered, 0 gaps, and the flash write pointer matching the gateway's data to the byte.

A test report like that is not paperwork. It is what lets me use a fast tool on a system that cannot afford to lose data.

## What changes for a team

With an assistant, the expensive part of engineering moves. Writing code gets cheaper; deciding what is correct does not. So the skills that matter more are the ones around the code: writing clear requirements, designing tests that can actually fail, and knowing the hardware well enough to ask the right question.

That is where I spend the time it saves me.
