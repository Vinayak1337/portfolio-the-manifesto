"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

function subscribe(onChange: () => void) {
  const timer = globalThis.setInterval(onChange, 1000);
  return () => globalThis.clearInterval(timer);
}

const getSnapshot = () => formatter.format(Date.now());
const getServerSnapshot = () => "";

/** Local time in New Delhi, ticking every second. Renders nothing on the server. */
export function LiveClock({ className }: Readonly<{ className?: string }>) {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <time className={className} suppressHydrationWarning>
      {time}
    </time>
  );
}
