"use client";

import { motion, type Variants } from "framer-motion";
import { experience } from "@/lib/experience";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="px-6 py-24" style={{ backgroundColor: "var(--bg-elevated)" }}>
      <div className="max-w-3xl mx-auto">
        <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center mb-12" style={{ color: "var(--text-secondary)" }}>Internships, freelance work, and real-world engineering practice.</p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="relative flex flex-col gap-10 border-l pl-8" style={{ borderColor: "var(--border)" }}>
          {experience.map((entry) => (
            <motion.div key={`${entry.org}-${entry.role}`} variants={item} className="relative">
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full btn-glow" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-medium px-3 py-1 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>{entry.category}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: entry.status === "Ongoing" ? "var(--accent-cyan)" : "var(--bg-elevated-2)", color: entry.status === "Ongoing" ? "#ffffff" : "var(--text-secondary)" }}>{entry.status}</span>
              </div>
              <h3 className="text-lg font-semibold">{entry.role}</h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>{entry.org} · {entry.dates}</p>
              <ul className="flex flex-col gap-1.5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm flex items-start gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--accent-blue)" }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
