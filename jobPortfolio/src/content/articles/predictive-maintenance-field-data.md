---
title: "Predictive maintenance: the model is only as good as the field data"
summary: "On a railway predictive-maintenance system, the AI/ML models get the attention. Lessons from the other end: the firmware and gateway that make sure the models get data worth learning from."
tags: ["AI/ML", "Predictive maintenance", "Edge & IoT"]
readMin: 5
order: 7
---

I work on a predictive maintenance system for railway signalling equipment. Trackside field units record how each asset behaves every time it operates, and AI/ML models in the cloud learn from that data to predict faults such as poor lubrication, friction or an obstruction before they stop a train.

The models get the attention. My part is the other end: the field-unit firmware and the station gateway. Here is what that end taught me about AI in the field.

## 1. A missing event is worse than a noisy one

A model can learn around noise. It cannot learn from an event that never arrived, and worse, it never finds out the event is missing. If the failures you lose are the ones that happen during bad conditions (power dips, radio outages), the training data quietly leaves out the most interesting cases.

So the whole data path is built around not losing anything:

- The field unit keeps events in flash while the radio link is down, then sends them in order once it is back.
- The station gateway keeps a store-and-forward log and only marks an event as sent once the cloud broker has acknowledged it.
- The uplink has a backup: fibre first, 4G when the fibre is down.

And it is tested, not assumed: in a 74-hour test with the radio off, 568 of 568 events were stored and delivered with no gaps.

## 2. Time is a feature

To compare how different assets behave, or how one asset changes over months, the waveform signatures have to line up in time. Each field unit samples 64 times per mains cycle, and the station gateway acts as the time source for every unit at the station, so signatures from different machines can be compared directly.

A clock that drifts by a few seconds is harmless for a dashboard and quietly harmful for a model.

## 3. Decide what an event is at the edge

Sending everything all the time would flood a narrow radio channel. Sending summaries would throw away the shape of the waveform, which is often where the early warning is. The field unit detects each operation, captures its full signature, and sends it as compact binary frames instead of JSON, with acknowledgements and resend for any frame that goes missing.

That decision, made in firmware, shapes what the models can ever learn.

## 4. Data quality needs its own tools

Alongside the product, I built tools to check the data itself: simulators that generate realistic events, analysers that replay captured data, and on another project a checker that grades every packet from a device fleet against the firmware's own packet format. On that fleet, almost 20,000 packets were checked in the first few weeks, and the bad ones pointed straight at the faults to fix.

## The takeaway

When people talk about AI for maintenance, they talk about models. In the field, most of the work is making sure the model gets complete, time-aligned, trustworthy data. That work lives in firmware, gateways and test reports, and it is the part I enjoy most.
