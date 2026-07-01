"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm tracking-widest font-semibold"
          style={{ color: "var(--text)" }}
        >
          Maaz<span style={{ color: "var(--accent)" }}> Imtiaz</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {l.label}
                <span className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 px-2.5 py-1 block bg-[var(--bg2)] border border-[var(--border2)] text-[var(--text)] text-[11px] font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none z-[100] normal-case tracking-normal">Go to {l.label}</span>
              </a>
            </li>
          ))}
          
          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="group relative p-1.5 rounded-md transition-colors duration-200 flex items-center justify-center"
              style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              <span className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 px-2.5 py-1 block bg-[var(--bg2)] border border-[var(--border2)] text-[var(--text)] text-[11px] font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none z-[100]">Toggle Theme</span>
            </button>
          </li>
        </ul>

        {/* Hire me button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="group relative btn-3d inline-flex items-center gap-2 font-mono text-xs tracking-wider px-4 py-2 rounded transition-all duration-200"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--grid-color)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Hire me
            <span className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 px-2.5 py-1 block bg-[var(--bg2)] border border-[var(--border2)] text-[var(--text)] text-[11px] font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none z-[100] normal-case tracking-normal">Go to Contact</span>
          </a>
        </div>

        {/* Mobile menu toggle & Theme */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md"
            style={{ color: "var(--muted)" }}
            data-tooltip="Toggle theme"
          >
             {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            style={{ color: "var(--text)" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm tracking-widest uppercase"
              style={{ color: "var(--muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-3d font-mono text-sm tracking-wider px-4 py-2 rounded text-center"
            style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
            onClick={() => setMenuOpen(false)}
          >
            Hire me
            <span className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 px-2.5 py-1 block bg-[var(--bg2)] border border-[var(--border2)] text-[var(--text)] text-[11px] font-medium rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none z-[100] normal-case tracking-normal">Go to Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
}
