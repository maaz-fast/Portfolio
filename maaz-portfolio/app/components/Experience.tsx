"use client";
import { useState } from "react";
import { experience } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const dotColor: Record<string, string> = {
  cyan: "var(--accent)",
  purple: "var(--accent2)",
  green: "var(--accent3)",
  blue: "#3b82f6",
};

const tagColor: Record<string, string> = {
  cyan: "rgba(0,212,255,0.15)",
  purple: "rgba(124,58,237,0.15)",
  green: "rgba(16,185,129,0.15)",
  blue: "rgba(59,130,246,0.15)",
};

const tagText: Record<string, string> = {
  cyan: "var(--accent)",
  purple: "#a78bfa",
  green: "var(--accent3)",
  blue: "#60a5fa",
};

function CompanyLogo({ job }: { job: any }) {
  const [error, setError] = useState(false);
  const sizeClass = "w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl flex items-center justify-center font-bold text-xl md:text-2xl shadow-sm transition-transform duration-300 group-hover:scale-105";

  if (job.logo && !error) {
    return (
      <div 
        className={`${sizeClass} bg-white overflow-hidden`} 
        style={{ border: `1px solid ${dotColor[job.color]}44` }}
      >
        <img 
          src={job.logo} 
          alt={job.company} 
          className="w-full h-full object-contain p-1.5"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div 
      className={sizeClass}
      style={{
        background: tagColor[job.color],
        color: tagText[job.color],
        border: `1px solid ${dotColor[job.color]}44`,
      }}
    >
      {job.company.charAt(0)}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg)", position: "relative", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader number="03" label="experience" title="Work History" />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, var(--accent), var(--accent2), transparent)",
            }}
          />

          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.role + job.company} className="pl-12 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--bg)",
                    border: `2px solid ${dotColor[job.color]}`,
                    boxShadow: `0 0 12px ${dotColor[job.color]}55`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: dotColor[job.color] }}
                  />
                </div>

                {/* Card */}
                <div className="card-3d relative rounded-xl p-6 md:p-8">
                  {/* Header & Logo */}
                  <div className="flex gap-4 md:gap-5 items-start mb-6">
                    <CompanyLogo job={job} />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-1.5">
                        <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                          {job.role}
                        </h3>
                        <div className="flex gap-2 flex-wrap">
                          <span
                            className="font-mono text-xs px-2 py-1 rounded"
                            style={{
                              background: tagColor[job.color],
                              color: tagText[job.color],
                              border: `1px solid ${dotColor[job.color]}33`,
                            }}
                          >
                            {job.period}
                          </span>
                          <span
                            className="font-mono text-xs px-2 py-1 rounded"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              color: "var(--muted)",
                              border: "1px solid var(--border2)",
                            }}
                          >
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <p className="font-mono text-sm" style={{ color: tagText[job.color] }}>
                        {job.company} — {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        <span
                          style={{ color: dotColor[job.color], flexShrink: 0, marginTop: 2 }}
                        >
                          ▸
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
