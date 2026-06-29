"use client";
import { skills } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import {
  Bot,
  Plug,
  Zap,
  FlaskConical,
  Bug,
  Database,
  GitBranch,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  plug: Plug,
  zap: Zap,
  flask: FlaskConical,
  bug: Bug,
  database: Database,
  gitBranch: GitBranch,
  globe: Globe,
};

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader number="02" label="skills" title="Tech Stack &amp; Expertise" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={skill.category}
                className="card-3d rounded-xl p-5 group cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: "var(--grid-color)",
                    border: "1px solid rgba(0, 212, 255, 0.15)",
                  }}
                >
                  {Icon && <Icon size={20} style={{ color: "var(--accent)" }} />}
                </div>
                <h3
                  className="font-semibold text-sm mb-3"
                  style={{ color: "var(--text)" }}
                >
                  {skill.category}
                </h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tools I Work With */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border2)" }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-6" style={{ color: "var(--accent)" }}>
            Core Toolset
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Languages & Data",
                tools: ["JavaScript", "C#", "SQL"]
              },
              {
                title: "Automation & API",
                tools: ["Playwright", "Selenium", "Postman", "K6", "Swagger"]
              },
              {
                title: "Tools & Workflow",
                tools: ["Jira", "Trello", "Git", "Docker", "Beekeeper", "Agile / Scrum"]
              }
            ].map((group) => (
              <div key={group.title} className="flex flex-col">
                <h4 className="text-[11px] font-medium mb-3 uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                      style={{
                        border: "1px solid var(--border2)",
                        color: "var(--text)",
                        background: "rgba(255,255,255,0.01)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                        e.currentTarget.style.background = "rgba(0, 212, 255, 0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border2)";
                        e.currentTarget.style.color = "var(--text)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.01)";
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
