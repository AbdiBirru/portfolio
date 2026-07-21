"use client";

import { motion, type Variants } from "framer-motion";
import { ClipboardList, Layers, Code2, FlaskConical, Rocket, RefreshCw } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const steps: Step[] = [
  { title: "Requirement Analysis", description: "Understanding the problem, defining scope, and clarifying requirements before writing any code.", icon: ClipboardList },
  { title: "System Design", description: "Planning architecture, data models, and component structure to support a scalable solution.", icon: Layers },
  { title: "Development", description: "Building features with clean, maintainable code and consistent engineering practices.", icon: Code2 },
  { title: "Testing", description: "Verifying functionality, catching edge cases, and debugging issues before release.", icon: FlaskConical },
  { title: "Deployment", description: "Shipping to production using CI/CD pipelines and platforms like Vercel.", icon: Rocket },
  { title: "Maintenance", description: "Monitoring, fixing issues, and iterating based on real-world usage and feedback.", icon: RefreshCw },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 id="approach-heading" className="text-3xl sm:text-4xl font-bold text-center mb-4">Engineering Approach</h2>
        <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>How I take a project from idea to a reliable, deployed product.</p>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="flex flex-wrap justify-center gap-6">
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={item} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl border p-6 flex flex-col gap-3" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)", boxShadow: "var(--card-glow)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center btn-glow shrink-0">
                  <step.icon size={18} className="text-white" />
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>Step {index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
