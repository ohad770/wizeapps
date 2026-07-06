"use client";

import { useMemo, useState } from "react";

const services = [
  { label: "Consultation", duration: "30 min", deposit: "$0" },
  { label: "Treatment", duration: "50 min", deposit: "$20" },
  { label: "Team visit", duration: "90 min", deposit: "$50" },
];

const slots = ["Today 16:30", "Tomorrow 10:00", "Friday 12:15"];
const channels = ["Email", "WhatsApp", "SMS"];

export default function BookingFlowDemo() {
  const [service, setService] = useState(services[0].label);
  const [slot, setSlot] = useState(slots[1]);
  const [channel, setChannel] = useState(channels[1]);
  const [reminder, setReminder] = useState(true);

  const selectedService = services.find((item) => item.label === service);
  const confirmation = useMemo(() => {
    const deposit =
      selectedService?.deposit === "$0"
        ? "No deposit required"
        : `${selectedService?.deposit} deposit required`;

    return [
      `${service} booked for ${slot}.`,
      deposit,
      reminder
        ? `${channel} reminder will be sent 2 hours before.`
        : "No reminder scheduled.",
    ];
  }, [channel, reminder, selectedService?.deposit, service, slot]);

  return (
    <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(17,24,39,0.45)] md:p-7">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-deep">
            Live demo
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            Try a small booking flow
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            This is the kind of focused interaction a service business can test
            before expanding into payments, waitlists, or staff rules.
          </p>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">
          Demo only
        </span>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <fieldset>
            <legend className="text-sm font-semibold text-foreground">
              Service
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {services.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setService(item.label)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    service === item.label
                      ? "border-accent bg-accent-soft"
                      : "border-gray-100 bg-muted-light hover:border-accent/40"
                  }`}
                >
                  <span className="block font-semibold text-foreground">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {item.duration}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-foreground">
              Time
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {slots.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSlot(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    slot === item
                      ? "border-accent bg-accent text-white"
                      : "border-gray-200 bg-white text-muted hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-foreground">
              Reminder channel
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {channels.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setChannel(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    channel === item
                      ? "border-foreground bg-foreground text-white"
                      : "border-gray-200 bg-white text-muted hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="flex items-center gap-3 rounded-xl border border-gray-100 bg-muted-light p-4 text-sm font-medium text-foreground">
            <input
              type="checkbox"
              checked={reminder}
              onChange={(event) => setReminder(event.target.checked)}
              className="h-4 w-4 accent-[var(--accent)]"
            />
            Send automatic reminder
          </label>
        </div>

        <div className="rounded-2xl bg-foreground p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Generated booking
          </p>
          <div className="mt-5 space-y-4">
            {confirmation.map((line) => (
              <div
                key={line}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-4"
              >
                <p className="text-sm leading-relaxed text-gray-200">{line}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl bg-white p-4 text-sm text-foreground">
            <p className="font-semibold">Staff view</p>
            <p className="mt-1 text-muted">
              Status: confirmed. Exception: none. Next action: send reminder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
