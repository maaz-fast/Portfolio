"use client";
import { education, certifications } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { GraduationCap, Monitor, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const eduIconMap: Record<string, LucideIcon> = {
  graduationCap: GraduationCap,
  monitor: Monitor,
  bookOpen: BookOpen,
};

/* Organisation brand logos for certifications */
const certLogos: Record<string, { bg: string; text: string; label: string; border: string }> = {
  ibm:       { bg: "#052FAD", text: "#ffffff", label: "IBM",  border: "rgba(5,47,173,0.4)" },
  linkedin:  { bg: "#0A66C2", text: "#ffffff", label: "in",   border: "rgba(10,102,194,0.4)" },
  aws:       { bg: "#232F3E", text: "#FF9900", label: "aws",  border: "rgba(255,153,0,0.3)" },
  postman:   { bg: "#FF6C37", text: "#ffffff", label: "PM",   border: "rgba(255,108,55,0.4)" },
  certiprof: { bg: "#1B365D", text: "#ffffff", label: "CP",   border: "rgba(27,54,93,0.4)" },
  "10pearls": { bg: "#0D4C8B", text: "#ffffff", label: "10P", border: "rgba(13,76,139,0.4)" },
};

function CertLogo({ logoKey }: { logoKey: string }) {
  const logo = certLogos[logoKey];
  if (!logo) return null;
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{
        background: logo.bg,
        border: `1px solid ${logo.border}`,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <span
        className="font-bold"
        style={{
          color: logo.text,
          fontSize: logo.label.length > 2 ? "9px" : "12px",
          letterSpacing: logo.label.length > 2 ? "0.02em" : "0.05em",
          textTransform: logo.label === "aws" ? "uppercase" : "none",
        }}
      >
        {logo.label}
      </span>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg)", position: "relative", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <SectionHeader number="05" label="education" title="Academic Background" />
            <div className="space-y-4">
              {education.map((edu) => {
                const Icon = eduIconMap[edu.icon];
                return (
                  <div
                    key={edu.degree}
                    className="card-3d flex items-start gap-4 p-5 rounded-xl"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--grid-color)",
                        border: "1px solid rgba(0,212,255,0.2)",
                      }}
                    >
                      {Icon && <Icon size={22} style={{ color: "var(--accent)" }} />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5" style={{ color: "var(--text)" }}>
                        {edu.degree}
                      </h3>
                      <p className="text-xs mb-1 leading-relaxed" style={{ color: "var(--muted)" }}>
                        {edu.institution}
                      </p>
                      <div className="flex gap-3">
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(0,212,255,0.08)",
                            color: "var(--accent)",
                            border: "1px solid rgba(0,212,255,0.2)",
                          }}
                        >
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionHeader number="06" label="certifications" title="Certificates" />
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="card-3d flex items-center gap-4 p-4 rounded-xl"
                >
                  <CertLogo logoKey={cert.logo} />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {cert.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        color: "var(--accent3)",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      ✓ Certified
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
