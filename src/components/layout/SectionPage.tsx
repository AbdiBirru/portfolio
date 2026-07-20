interface SectionPageProps {
  id: string;
  ariaLabel: string;
  className?: string;
  bgVar?: string;
  constrainWidth?: boolean;
  children: React.ReactNode;
}

export default function SectionPage({ id, ariaLabel, className = "", bgVar, constrainWidth = true, children }: SectionPageProps) {
  return (
    <section id={id} aria-label={ariaLabel} data-section-page className={`snap-page px-6 py-16 ${className}`} style={bgVar ? { backgroundColor: bgVar } : undefined}>
      {constrainWidth ? <div className="w-full max-w-6xl mx-auto">{children}</div> : children}
    </section>
  );
}
