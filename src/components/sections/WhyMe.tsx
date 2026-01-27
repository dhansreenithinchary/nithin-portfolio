"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles, Code2, Gauge } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Modern Web Interfaces",
    desc: `I build clean, responsive, and visually accurate web interfaces by translating designs into functional, production-ready web experiences.`,
  },
  {
    icon: Code2,
    title: "Scalable Web Architecture",
    desc: `I write clean, maintainable React and Next.js code that scales well and follows modern web development best practices.`,
  },
  {
    icon: Gauge,
    title: "Performance & Reliability",
    desc: `Focused on performance, accessibility, and delivering fast, reliable web applications across all devices and screen sizes.`,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function WhyMe() {
  return (
    <section className="relative py-12">

      {/* 🔥 TOP TRANSITION DIVIDER (LINE + GLOW) */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-105 h-px bg-emerald-400/40 blur-md" />

      {/* BACKGROUND TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

      {/* HEADER */}
      <motion.div
        className="relative container-80 text-center mb-10"
        variants={headerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        >
        <motion.p
            variants={headerVariants}
            className="text-sm font-semibold tracking-widest text-emerald-400 mb-1"
        >
            — SKILLS HIGHLIGHT —
        </motion.p>

        <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-2xl font-semibold text-white mb-1"
        >
            Why work with me
        </motion.h2>

        <motion.p
            variants={headerVariants}
            className="text-gray-400 max-w-xl mx-auto"
        >
            I focus on building scalable, performant, and visually polished web applications.
        </motion.p>
      </motion.div>


      {/* CARDS */}
        <motion.div className="relative container-80 grid grid-cols-1 md:grid-cols-3 gap-10" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        {items.map((item, i) => {
            const Icon = item.icon;
            return (
            <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="relative backdrop-blur border border-white/10 rounded-lg px-8 py-8 text-center overflow-hidden">
                
                {/* CORNER ACCENTS */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-400/60" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-emerald-400/60" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-emerald-400/60" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-400/60" />

                {/* CARD DIAGONAL TEXTURE */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

                {/* ICON WITH STATIC GLOW */}
                <div className="relative mx-auto mb-8 w-14 h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-md bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.35),transparent_70%)]" />

                <div className="relative w-14 h-14 flex items-center justify-center rounded-md bg-[#0c3a31] border border-white/10"
                    style={{
                        boxShadow: "0 0 11px rgba(var(--primary-rgb), .55)",
                    }}
                >
                    <Icon className="w-6 h-6 text-lime-400" />
                </div>
                </div>

                {/* TEXT */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
                </p>
            </motion.div>
            );
        })}
        </motion.div>

      {/* 🔥 BOTTOM TRANSITION DIVIDER (OPTIONAL BUT NICE) */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
