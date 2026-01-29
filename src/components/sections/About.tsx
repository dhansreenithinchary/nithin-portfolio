"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSplit() {
  return (
    <section id="about" className="relative py-24"
      style={{
        background:"linear-gradient(to bottom right,var(--default-body-bg-color) 0%,var(--theme-bg-gradient) 25%,var(--default-body-bg-color) 100%)",
      }}
    >
      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* RADIAL GLOW LAYER */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          background:"radial-gradient(circle, rgba(var(--primary-rgb), .18), rgba(var(--primary-rgb), .08) 40%, transparent)",
        }}
      />

      {/* BACKGROUND TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

      <motion.div className="relative container-80 grid grid-cols-1 md:grid-cols-2 gap-14 items-center" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} >
        {/* LEFT IMAGE */}
        <motion.div variants={item} className="relative">
          {/* DECORATIVE DASHED SQUARES (OUTSIDE CLIP) */}
          <div className="absolute -top-6 -left-6 w-24 h-24 pointer-events-none"
            style={{
              border: "6px dashed rgba(255,255,255,.05)",
            }}
          />

          <div className="absolute -bottom-6 -right-6 w-24 h-24 pointer-events-none"
            style={{
              border: "6px dashed rgba(255,255,255,.05)",
            }}
          />

          {/* IMAGE WRAPPER (CLIPPED CONTENT ONLY) */}
          <div className="relative rounded-lg overflow-hidden bg-[#0000001a]">
            <Image src="/about.png" alt="Web developer portrait" width={640} height={480} className="w-full h-full object-cover"/>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={item}>
          <motion.p variants={item} className="text-sm font-semibold tracking-widest text-emerald-400 mb-3">
            — ABOUT ME —
          </motion.p>

          <motion.h2 variants={item} className="text-3xl md:text-2xl font-semibold text-white mb-4">
            Where innovation meets passion
          </motion.h2>

          <motion.p variants={item} className="text-gray-400 leading-relaxed mb-8">
            I’m Nithin, a web developer focused on creating modern,
            scalable, and high-performance web applications.
            I enjoy building clean interfaces, writing maintainable
            code, and delivering reliable user experiences.
          </motion.p>

          {/* BULLETS */}
          <div className="space-y-5">
            <motion.div variants={item} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
              <p className="text-gray-400 leading-relaxed">
                Strong experience in building responsive and
                production-ready web applications using React
                and Next.js.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
              <p className="text-gray-400 leading-relaxed">
                Focused on clean architecture, reusable components,
                and scalable development practices.
              </p>
            </motion.div>

            <motion.div variants={item} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
              <p className="text-gray-400 leading-relaxed">
                Committed to performance, accessibility, and
                long-term maintainability of web solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
