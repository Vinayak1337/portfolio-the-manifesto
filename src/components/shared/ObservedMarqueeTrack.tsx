"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ObservedMarqueeTrack({
  children,
  className,
}: Readonly<{ children: ReactNode; className: string }>) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      ([entry]) => track.classList.toggle("is-visible", entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );
    observer.observe(track);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} ref={trackRef}>
      {children}
    </div>
  );
}
