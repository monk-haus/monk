"use client";

import { useState } from "react";
import { useMountEffect } from "../../hooks/useMountEffect";
import { work, type WorkItem } from "../work";

const featured = work.filter((item) => item.featured);
const rest = work.filter((item) => !item.featured);

function shuffled(items: WorkItem[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function WorkList() {
  const [items, setItems] = useState<WorkItem[]>([...featured, ...rest]);

  useMountEffect(() => {
    setItems([...shuffled(featured), ...shuffled(rest)]);
  });

  return (
    <section className="work" aria-label="Selected work">
      <h2 className="sr-only">Selected work</h2>
      <div className="work-header">
        <span className="work-num">No</span>
        <span className="work-title">Project</span>
        <span className="work-spacer" aria-hidden />
        <span className="work-services">Services</span>
        <span className="work-year">Year</span>
      </div>

      <ul className="work-items">
        {items.map((item, i) => (
          <li className="work-row" key={item.title}>
            <a
              className="work-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="work-title">{item.title}</span>
              <span className="work-spacer" aria-hidden />
              <span className="work-services">{item.services}</span>
              <span className="work-year">{item.year}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
