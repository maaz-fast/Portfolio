"use client";
export default function Footer() {
  return (
    <footer
      className="relative z-10 text-center py-8 px-6 font-mono text-xs"
      style={{
        borderTop: "1px solid var(--border)",
        color: "var(--muted)",
        background: "var(--bg)",
      }}
    >
      <span style={{ color: "var(--accent)" }}>// </span>
      Muhammad Maaz Bin Imtiaz · SQA Engineer · Karachi, Pakistan
      <span style={{ color: "var(--accent3)" }}> — All tests passing ✓</span>
    </footer>
  );
}
