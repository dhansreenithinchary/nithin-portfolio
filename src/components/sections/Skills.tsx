"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Layers, Server, Database, Wrench } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const skills = [
  {
    title: "Web Technologies",
    icon: Code2,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "REST APIs", "Authentication", "API Integration"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "Firebase", "Database Design"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git & GitHub", "VS Code", "Responsive Design", "Optimization"],
  },
];

export default function SkillsAlt() {
  return (
    <section id="skills" className="relative py-12"
      style={{
        background:
          "linear-gradient(to bottom right,var(--default-body-bg-color) 0%,var(--theme-bg-gradient) 25%,var(--default-body-bg-color) 100%)",
      }}>
      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* BACKGROUND TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

      {/* HEADER */}
      <motion.div className="relative container-80 text-center mb-10" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        
        <motion.p variants={item} className="text-sm font-semibold tracking-widest text-emerald-400 mb-2" >
          — SKILLS —
        </motion.p>

        <motion.h2 variants={item} className="text-3xl md:text-2xl font-semibold text-white mb-2" >
          Technologies & tools I use
        </motion.h2>

        <motion.p variants={item} className="text-gray-400 max-w-xl mx-auto" >
          A focused set of technologies I work with to build modern,
          scalable, and reliable web applications.
        </motion.p>
      </motion.div>

      {/* SKILL GROUPS */}
      <motion.div className="relative container-80 grid grid-cols-1 md:grid-cols-3 gap-12" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        {skills.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div key={i} variants={item}>
              {/* GROUP HEADER */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0c3a31] border border-white/10"
                  style={{
                    boxShadow: "0 0 11px rgba(var(--primary-rgb), .55)",
                  }}
                >
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>

              {/* SKILL GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {group.items.map((skill, idx) => (
                  <div key={idx} className="relative px-4 py-3 text-sm text-gray-300 border border-white/10 rounded-md backdrop-blur hover:-translate-y-1 transition">
                    {/* CORNER ACCENTS (LOCKED STYLE) */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-400/40" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-400/40" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
