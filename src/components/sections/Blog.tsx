"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Layers, Puzzle, Palette } from "lucide-react";
import SectionPage from "@/components/layout/SectionPage";

interface LearningTopic { title: string; description: string; icon: React.ComponentType<{ size?: number; className?: string }>; }

const topics: LearningTopic[] = [
  { title: "Full-Stack Development", description: "Deepening my skills in React, Node.js, and PostgreSQL to build complete, production-ready applications.", icon: Code2 },
  { title: "System Design & Architecture", description: "Learning how to architect scalable, reliable systems as applications grow in complexity.", icon: Layers },
  { title: "Data Structures & Algorithms", description: "Strengthening problem-solving skills through consistent, deliberate practice.", icon: Puzzle },
  { title: "UI/UX & Scalable Products", description: "Exploring design principles to build interfaces that are functional, accessible, and delightful.", icon: Palette },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Blog() {
  return (
    <SectionPage id="learning" ariaLabel="Currently Learning">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Currently Learning</h2>
      <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>Topics I&apos;m actively studying to grow as a full-stack engineer. Articles coming soon.</p>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topics.map(({ title, description, icon: Icon }) => (
          <motion.div key={title} variants={item} className="rounded-2xl border p-6 flex gap-4 items-start" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center btn-glow shrink-0"><Icon size={18} className="text-white" /></div>
            <div><h3 className="text-base font-semibold mb-1">{title}</h3><p className="text-sm" style={{ color: "var(--text-secondary)" }}>{description}</p></div>
          </motion.div>
        ))}
      </motion.div>
    </SectionPage>
  );
}
