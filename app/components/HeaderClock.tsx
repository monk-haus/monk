"use client";

import { useState } from "react";
import { useMountEffect } from "../../hooks/useMountEffect";

const ZONE = "Europe/Berlin";

function offsetMinutes(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: ZONE,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
    .formatToParts(date)
    .reduce<Record<string, number>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = Number(p.value);
      return acc;
    }, {});

  const asUTC = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour % 24,
    parts.minute,
    parts.second,
  );

  return Math.round((asUTC - date.getTime()) / 60000);
}

function formatCest() {
  const now = new Date();
  const standard = offsetMinutes(new Date(now.getFullYear(), 0, 1));
  const abbrev = offsetMinutes(now) > standard ? "CEST" : "CET";

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: ZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  return `${abbrev} ${time}`;
}

export function HeaderClock() {
  const [label, setLabel] = useState<string | null>(null);

  useMountEffect(() => {
    setLabel(formatCest());
    const id = window.setInterval(() => setLabel(formatCest()), 1000);
    return () => window.clearInterval(id);
  });

  return (
    <span id="header-time" suppressHydrationWarning>
      {label ?? ""}
    </span>
  );
}
