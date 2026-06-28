"use client";
import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, Code2, Link2, ArrowDown } from "lucide-react";
import { personal, stats } from "../data/portfolio";

const terminalLines = [
  { delay: 0, content: <><span style={{color:"var(--accent3)"}}>$</span> <span style={{color:"var(--text)"}}>run-tests --suite=regression --env=production</span></> },
  { delay: 600, content: <><span style={{color:"var(--muted)"}}>✓ Functional Tests&nbsp;&nbsp;</span><span style={{color:"var(--accent3)"}}>PASSED (148/148)</span></> },
  { delay: 900, content: <><span style={{color:"var(--muted)"}}>✓ API Tests&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{color:"var(--accent3)"}}>PASSED (62/62)</span></> },
  { delay: 1200, content: <><span style={{color:"var(--muted)"}}>✓ UI Automation&nbsp;&nbsp;&nbsp;</span><span style={{color:"var(--accent3)"}}>PASSED (95/95)</span></> },
  { delay: 1500, content: <><span style={{color:"var(--muted)"}}>✓ Load Tests (K6)&nbsp;&nbsp;</span><span style={{color:"var(--accent3)"}}>PASSED — p95 &lt; 200ms</span></> },
  { delay: 1900, content: <><span style={{color:"var(--accent)"}}>✔ Coverage: 95%+</span>&nbsp;&nbsp;<span style={{color:"var(--accent2)"}}>Bug reduction: 20%</span></> },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay + 800);
    });
  }, []);

  return (
    <div
      className="card-3d rounded-lg p-5 font-mono text-xs leading-relaxed relative overflow-hidden"
      style={{ maxWidth: 480 }}
    >
      {/* Traffic lights */}
      <div className="flex gap-1.5 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
        <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
        <span className="ml-3 text-xs" style={{color:"var(--muted)"}}>terminal — maaz@qa:~</span>
      </div>
      <div className="space-y-1">
        {terminalLines.map((line, i) => (
          <div
            key={i}
            className="transition-opacity duration-300"
            style={{ opacity: visibleLines.includes(i) ? 1 : 0 }}
          >
            {line.content}
          </div>
        ))}
        <div className="flex items-center gap-1 mt-1">
          <span style={{color:"var(--accent3)"}}>$</span>
          <span
            className="inline-block w-2 h-4 cursor-blink"
            style={{ background: "var(--accent)", marginLeft: 4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            {/* Available badge */}
            {personal.availableForWork && (
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ border:"1px solid rgba(16,185,129,0.4)", background:"rgba(16,185,129,0.06)", color:"#10b981" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 glow-cyan inline-block" />
                Available for new opportunities
              </div>
            )}

            {/* Name */}
            <h1 className="font-bold leading-tight mb-3" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "-0.02em" }}>
              Muhammad<br />
              <span className="gradient-text">Maaz Bin Imtiaz</span>
            </h1>

            {/* Title */}
            <p className="font-mono mb-4" style={{ color:"var(--accent3)", fontSize:"1rem" }}>
              &lt; {personal.title} / {personal.subtitle} &gt;
            </p>

            {/* Bio */}
            <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color:"var(--muted)" }}>
              {personal.bio}
            </p>

            {/* Location & contact mini row */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm" style={{ color:"var(--muted)" }}>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} style={{color:"var(--accent)"}} />
                {personal.location}
              </span>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:opacity-80 transition-colors">
                <Mail size={14} style={{color:"var(--accent)"}} />
                {personal.email}
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#experience"
                className="btn-3d inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded font-semibold transition-all duration-200"
                style={{ background:"var(--accent)", color:"var(--card)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              >
                View Experience ▸
              </a>
              <a
                href="#contact"
                className="btn-3d inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded transition-all duration-200"
                style={{ border:"1px solid var(--accent)", color:"var(--accent)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--grid-color)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
              >
                Get in touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded transition-colors duration-200"
                style={{ border:"1px solid var(--border2)", color:"var(--muted)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >
                <Link2 size={16} />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded transition-colors duration-200"
                style={{ border:"1px solid var(--border2)", color:"var(--muted)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >
                <Code2 size={16} />
              </a>
              <a href={`mailto:${personal.email}`}
                className="p-2 rounded transition-colors duration-200"
                style={{ border:"1px solid var(--border2)", color:"var(--muted)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right — terminal + stats */}
          <div className="flex flex-col gap-6">
            <Terminal />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-3d rounded-lg p-4 text-center"
                >
                  <div className="font-mono font-bold text-2xl mb-1 gradient-text">{s.value}</div>
                  <div className="text-xs" style={{color:"var(--muted)"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#skills" className="flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
            style={{ color:"var(--muted)" }}>
            <span className="font-mono text-xs tracking-widest">scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
