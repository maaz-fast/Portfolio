"use client";
type Props = {
  number: string;
  label: string;
  title: string;
};

export default function SectionHeader({ number, label, title }: Props) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs tracking-widest" style={{ color: "var(--accent)" }}>
          {number} // {label}
        </span>
        <span className="flex-1 h-px" style={{ background: "var(--border2)", maxWidth: 80 }} />
      </div>
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
    </div>
  );
}
