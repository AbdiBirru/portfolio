"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-24" style={{ backgroundColor: "var(--bg-elevated)" }}>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
        <motion.div variants={item} className="flex flex-col items-center md:items-start gap-4">
          <div className="w-32 h-32 rounded-full flex items-center justify-center text-3xl font-bold text-white btn-glow">AB</div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <GraduationCap size={16} />
            <span>Computer Science Student</span>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <MapPin size={16} />
            <span>Hawassa University</span>
          </div>
        </motion.div>

        <motion.div variants={item} className="flex flex-col gap-6">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold">About Me</h2>

          <p style={{ color: "var(--text-secondary)" }}>
            I&apos;m a Computer Science student at Hawassa University and a full-stack developer focused on building reliable, scalable, and user-centered software. I combine academic foundations with hands-on experience across frontend, backend, databases, and deployment workflows.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            My interest in development started with curiosity about how software works, and grew through consistent practice, real projects, and solving genuine engineering problems. I enjoy turning ideas into functional products and continuously sharpening my skills through building and iteration.
          </p>

          <blockquote className="border-l-4 pl-4 py-1 italic" style={{ borderColor: "var(--accent-blue)", color: "var(--text-primary)" }}>
            &quot;I write clean, maintainable code while prioritizing practical solutions and great user experiences — strong developers are built by shipping, debugging, and learning from failure.&quot;
          </blockquote>

          <p style={{ color: "var(--text-secondary)" }}>
            Right now, I&apos;m seeking internships and real-world engineering experience to grow into a highly skilled full-stack engineer. Long term, I want to build technology products that create real impact and scale beyond a single project.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
