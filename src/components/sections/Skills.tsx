"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Server, Database, Wrench, Lightbulb } from "lucide-react";
import SectionPage from "@/components/layout/SectionPage";

interface SkillCategory { title: string; icon: React.ComponentType<{ size?: number; className?: string }>; skills: string[]; }

const skillCategories: SkillCategory[] = [
  { title: "Frontend", icon: Code2, skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Web Development"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "REST APIs", "Backend Architecture", "API Integration"] },
  { title: "Databases", icon: Database, skills: ["PostgreSQL", "MySQL", "SQL", "Database Design", "Data Modeling"] },
  { title: "DevOps & Tools", icon: Wrench, skills: ["Git & GitHub", "Version Control", "Deployment (Vercel)", "Development Workflows", "Linux Fundamentals"] },
  { title: "Software Engineering Concepts", icon: Lightbulb, skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Software Design Principles", "Debugging & Problem Solving", "Software Development Lifecycle", "Clean Code Practices"] },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Skills() {
  return (
    <SectionPage id="skills" ariaLabel="Skills">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Skills</h2>
      <p className="text-center max-w-xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>Technologies and concepts I use to design, build, and ship full-stack applications.</p>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map(({ title, icon: Icon, skills }) => (
          <motion.div key={title} variants={item} className="rounded-2xl border p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1" style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center btn-glow"><Icon size={18} className="text-white" /></div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (<span key={skill} className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>{skill}</span>))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionPage>
  );
}
