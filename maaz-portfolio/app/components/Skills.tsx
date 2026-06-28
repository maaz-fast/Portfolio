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

        {/* Tool badges */}
        <div className="mt-12">
          <p className="font-mono text-xs tracking-widest mb-4" style={{ color: "var(--muted)" }}>
            // tools I work with
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Playwright", "Selenium", "Postman", "K6", "Jira", "Trello",
              "Docker", "SQL", "Beekeeper", "JavaScript", "C#", "Swagger",
              "Git", "Agile / Scrum",
            ].map((tool) => (
              <span
                key={tool}
                className="font-mono text-xs px-3 py-1 rounded"
                style={{
                  border: "1px solid var(--border2)",
                  color: "var(--muted)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
