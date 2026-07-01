"use client";
import { useState } from "react";
import { Mail, Phone, Code2, MapPin, Bug, Terminal, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
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
    icon: <FaLinkedin size={18} />,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ background: "var(--bg2)", position: "relative", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-0">
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
                    className="group relative card-3d flex items-center gap-4 p-4 rounded-xl text-left w-full"
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
                    <span className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-2.5 py-1 block bg-[var(--bg2)] border border-[var(--border2)] text-[var(--text)] text-[11px] font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none z-[100]">{item.label}</span>
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

          {/* Contact Form - Bug Ticket Theme */}
          <form onSubmit={handleSubmit} className="card-3d p-6 sm:p-8 rounded-xl text-left w-full mt-4 border-t-[4px]" style={{ borderTopColor: "var(--accent)", position: "relative" }}>
            
            {/* Toast Notifications */}
            {submitStatus === "success" && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono z-50 shadow-lg transition-all duration-300" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)", color: "#10b981", backdropFilter: "blur(4px)" }}>
                <CheckCircle2 size={16} /> Request Executed!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono z-50 shadow-lg transition-all duration-300" style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", color: "#ef4444", backdropFilter: "blur(4px)" }}>
                <AlertCircle size={16} /> Execution Failed. Try again.
              </div>
            )}
            
            {/* Web3Forms Configuration */}
            <input type="hidden" name="access_key" value="36939e35-8f06-4970-84cf-f886ef41167d" />
            <input type="hidden" name="subject" value="New Inquiry from Portfolio!" />
            <input type="hidden" name="from_name" value="Maaz QA Portfolio" />
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-xl font-bold flex items-center gap-2" style={{ color: "var(--text)" }}>
                <Bug size={20} style={{ color: "var(--accent)" }} />
                Initialize Request
              </h3>
              <span className="font-mono text-[10px] sm:text-xs px-2 py-1 rounded tracking-wider uppercase" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" }}>Status: OPEN</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider font-bold" style={{ color: "var(--muted)" }}>Reporter <span style={{color:"var(--accent)"}}>*</span></label>
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full bg-transparent p-3 rounded-lg text-sm border focus:outline-none transition-all duration-200 placeholder:text-[var(--muted)] placeholder:opacity-60" 
                  style={{ borderColor: "var(--border2)", color: "var(--text)" }} 
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border2)"}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider font-bold" style={{ color: "var(--muted)" }}>Contact Email <span style={{color:"var(--accent)"}}>*</span></label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-transparent p-3 rounded-lg text-sm border focus:outline-none transition-all duration-200 placeholder:text-[var(--muted)] placeholder:opacity-60" 
                  style={{ borderColor: "var(--border2)", color: "var(--text)" }} 
                  onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border2)"}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-4">
              <label htmlFor="type" className="text-[10px] font-mono uppercase tracking-wider font-bold" style={{ color: "var(--muted)" }}>Inquiry Type</label>
              <select 
                name="type"
                id="type" 
                className="w-full bg-transparent p-3 rounded-lg text-sm border focus:outline-none transition-all duration-200 appearance-none cursor-pointer" 
                style={{ borderColor: "var(--border2)", color: "var(--text)" }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border2)"}
              >
                <option value="freelance" style={{ background: "var(--bg)", color: "var(--text)" }}>Freelance Project</option>
                <option value="fulltime" style={{ background: "var(--bg)", color: "var(--text)" }}>Full-Time Opportunity</option>
                <option value="consulting" style={{ background: "var(--bg)", color: "var(--text)" }}>QA Consulting</option>
                <option value="other" style={{ background: "var(--bg)", color: "var(--text)" }}>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider font-bold" style={{ color: "var(--muted)" }}>Project Details / Description <span style={{color:"var(--accent)"}}>*</span></label>
              <textarea 
                name="message"
                id="message" 
                rows={4} 
                placeholder="Describe your project, timeline, and how I can help..." 
                className="w-full bg-transparent p-3 rounded-lg text-sm border focus:outline-none transition-all duration-200 resize-none font-mono placeholder:text-[var(--muted)] placeholder:opacity-60" 
                style={{ borderColor: "var(--border2)", color: "var(--text)" }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border2)"}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-3d w-full flex items-center justify-center gap-2 font-mono text-sm px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: "var(--accent)", color: "var(--card)" }}
              onMouseEnter={(e) => { if(!isSubmitting) (e.currentTarget as HTMLElement).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { if(!isSubmitting) (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Executing...
                </>
              ) : (
                <>
                  <Terminal size={16} />
                  Execute Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
