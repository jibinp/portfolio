---
title: "Security in the AI era: lessons from connected devices"
summary: "AI makes software faster to write, and just as fast to get wrong. From an IoT engineer's seat: where devices are vulnerable, what the AI era adds, and the basics I build in from the first day of a design."
tags: ["Cybersecurity", "IoT", "AI"]
readMin: 5
order: 3
---

Connected devices live for years in places nobody watches: a trackside cabinet, a lift machine room, a rooftop inverter. Every one of them is a computer on a network. That makes security a design requirement, not a feature to add later.

AI changes the picture in two ways. It helps attackers find and exploit weaknesses faster, and it helps developers ship code faster, including code nobody fully read. Both make the basics more important, not less.

## Where devices are usually weak

- **Secrets in the code.** Passwords, keys and broker credentials hard-coded in firmware or scripts, and then copied into every unit and every repository.
- **Shared credentials.** One password for the whole fleet, so one leaked device exposes all of them.
- **Unsigned updates.** Over-the-air updates that accept any image, so whoever can reach the device can replace its firmware.
- **No way to rotate.** Certificates and keys that can never be changed once the device leaves the factory.
- **Plain-text links.** Data sent without encryption, because "it is only sensor data".

## What I build in from day one

On a 4G solar data logger I am leading, the cloud design starts from these rules:

- **A unique identity for every device.** Each logger leaves the factory with a shared claim certificate, connects once and swaps it for its own device certificate.
- **Keys in hardware.** A secure element stores the certificates, so they cannot simply be read out of flash.
- **Encrypted, authenticated links.** MQTT over TLS, with a battery-backed clock so certificate checks work from the first boot.
- **Signed updates with rollback.** Every firmware image is checked with SHA-256 and a signature before it is installed, with A/B partitions so a bad update rolls back.
- **Rotation by design.** Certificates can be replaced in the field through a managed job, not only by a technician.

## What the AI era adds

- **AI-written code needs the same review as human code.** An assistant will happily produce a working MQTT client with the password inline. Working is not the same as safe.
- **AI tools see what you give them.** When I built AI agents for project reporting, one of the first rules was: no passwords, keys, device IDs or IP addresses in anything they write.
- **Attackers automate too.** Scanning for default credentials and known weaknesses is cheap now. A device that relies on nobody finding it will be found.

## A short checklist

1. No secrets in source code or in the repository history.
2. A unique credential per device, stored in hardware where possible.
3. Encryption on every link, including the "internal" ones.
4. Signed updates, with a tested rollback path.
5. A plan to rotate keys and certificates in the field.
6. Review AI-generated code for security, not just for whether it runs.

Security is rarely one clever trick. It is a set of boring decisions made early and kept consistently. The AI era does not change that. It just shortens the time before a bad decision is found.
