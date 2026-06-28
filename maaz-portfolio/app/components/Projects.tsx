"use client";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { FileText, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const projectIconMap: Record<string, LucideIcon> = {
  fileText: FileText,
  messageSquare: MessageSquare,
};

const tagStyles: Record<string, { bg: string; color: string; border: string }> = {
  blue: {
    bg: "rgba(96,165,250,0.08)",
    color: "#60a5fa",
    border: "rgba(96,165,250,0.3)",
  },
  purple: {
    bg: "rgba(167,139,250,0.08)",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.3)",
  },
};

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader number="04" label="projects" title="Key Projects" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const ts = tagStyles[project.tagColor] ?? tagStyles.blue;
            return (
              <div
                key={project.name}
                className="card-3d rounded-xl group flex flex-col relative overflow-hidden"
              >
                {/* Top gradient bar */}
                <div
                  className="h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                  }}
                />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: "var(--grid-color)",
                        border: "1px solid rgba(0, 212, 255, 0.15)",
                      }}
                    >
                      {(() => {
                        const Icon = projectIconMap[project.icon];
                        return Icon ? <Icon size={24} style={{ color: "var(--accent)" }} /> : null;
                      })()}
                    </div>
                    <span
                      className="font-mono text-xs px-2 py-1 rounded"
                      style={{
                        color: "var(--muted)",
                        border: "1px solid var(--border2)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text)" }}>
                    {project.name}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        <span style={{ color: "var(--accent3)", flexShrink: 0, marginTop: 2 }}>
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded"
                        style={{
                          background: ts.bg,
                          color: ts.color,
                          border: `1px solid ${ts.border}`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
