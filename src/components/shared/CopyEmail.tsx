"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email }: Readonly<{ email: string }>) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof globalThis.setTimeout>>(undefined);

  useEffect(() => () => globalThis.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    setCopied(true);
    globalThis.clearTimeout(timer.current);
    timer.current = globalThis.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      className="copy-email"
      data-copied={copied ? "true" : undefined}
      onClick={copy}
      type="button"
    >
      <span className="copy-email-roll" aria-hidden="true">
        <span>Copy email</span>
        <span>Copied</span>
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied to clipboard" : "Copy email"}
      </span>
    </button>
  );
}
