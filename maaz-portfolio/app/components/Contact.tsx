"use client";
import { Mail, Phone, Link2, Code2, MapPin } from "lucide-react";
import { personal } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <Link2 size={18} />,
    label: "LinkedIn",
    value: "muhammad-maaz-bin-imtiaz",
    href: personal.linkedin,
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: personal.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader number="07" label="contact" title="Let's Work Together" />

          <p className="text-base leading-relaxed mb-12" style={{ color: "var(--muted)" }}>
            Looking for a detail-oriented QA Engineer who breaks things before your users do?
            I'm open to full-time roles, freelance projects, and collaborations.
          </p>

          {/* Contact grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="card-3d flex items-center gap-4 p-4 rounded-xl text-left w-full"
                    style={{
                      color: "var(--text)",
                      display: "flex",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text)";
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                    <div>
                      <div className="text-xs font-mono mb-0.5" style={{ color: "var(--muted)" }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-medium break-all">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="card-3d flex items-center gap-4 p-4 rounded-xl text-left"
                  >
                    <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                    <div>
                      <div className="text-xs font-mono mb-0.5" style={{ color: "var(--muted)" }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`mailto:${personal.email}`}
            className="btn-3d inline-flex items-center gap-3 font-mono text-sm px-8 py-3 rounded font-semibold transition-all duration-200"
            style={{ background: "var(--accent)", color: "var(--card)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.9")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            <Mail size={16} />
            Send me a message
          </a>
        </div>
      </div>
    </section>
  );
}
