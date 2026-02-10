"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const experiences = [
  {
    role: "Web Designer",
    company: "Freelance",
    period: "MAY 2025 — Present",
    points: [
      "Worked with diverse clients to design and deliver modern, conversion-focused websites.",
      "Helped brands establish a strong digital presence using WordPress, Webflow, and modern UI tools.",
      "Provided operational consulting to improve internal workflows and business scalability.",
      "Advised on brand positioning, digital transformation, and user experience strategy.",
      "Applied a user-centric design approach backed by data, insights, and business goals.",
    ],
  },
  {
    role: "Web Designer & Operations Manager",
    company: "Prizmabrixx",
    period: "SEP 2023 — FEB 2025",
    points: [
      "Joined as a Web Designer and progressed to Operations Manager, handling both creative and managerial responsibilities.",
      "Designed and redesigned company and client websites with strong focus on branding, usability, and performance.",
      "Managed design teams and coordinated cross-functional operations for smooth project delivery.",
      "Streamlined operational workflows, reducing project turnaround time by approximately 20%.",
      "Collaborated directly with clients to gather requirements and deliver tailored web solutions aligned with business goals.",
    ],
  },
  {
    role: "Junior Web Designer",
    company: "Askmeguru Technologies",
    period: "FEB 2022 — JUN 2023",
    points: [
      "Built a strong foundation in UI/UX design, responsive layouts, and front-end development.",
      "Developed and maintained responsive websites using HTML, CSS, and WordPress.",
      "Worked on real-world projects including moxa-ms.com, a B2B semiconductor and electronics portal.",
      "Collaborated with developers to translate design concepts into live, functional web products.",
      "Ensured cross-browser compatibility and optimized websites for performance and usability.",
    ],
  },
];

export default function ExperienceHorizontal() {
  return (
    <section id="experience" className="relative py-12"
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
          — EXPERIENCE —
        </motion.p>

        <motion.h2 variants={item} className="text-3xl md:text-2xl font-semibold text-white mb-2" >
          Career progression
        </motion.h2>

        <motion.p variants={item} className="text-gray-400 max-w-xl mx-auto" >
          A timeline of roles that shaped my skills, mindset, and approach to building products.
        </motion.p>
      </motion.div>

      {/* TIMELINE */}
        <motion.div className="relative container-80" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} >
        {/* CONNECTING LINE (DESKTOP ONLY) */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" />
        <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-65 h-px bg-emerald-400/40 blur-md" />

        {/* SCROLL WRAPPER (MOBILE) */}
        <div
            className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible overflow-y-visible pb-10 snap-x snap-mandatory">
            {experiences.map((exp, i) => (
            <motion.div key={i} variants={item} className="relative min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center flex">
                {/* DOT */}
                <div className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0c3a31] border border-white/10 items-center justify-center"
                    style={{
                        boxShadow: "0 0 11px rgba(var(--primary-rgb), .55)",
                    }}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* CARD (EQUAL HEIGHT FIX) */}
                <div className="mt-10 w-full flex flex-col backdrop-blur border border-white/10 rounded-lg p-6 relative">
                {/* CORNER ACCENTS */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-400/40" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-400/40" />

                {/* CONTENT */}
                <h3 className="text-lg font-semibold text-white mb-1">
                    {exp.role}
                </h3>

                <p className="text-sm text-emerald-400 mb-1">
                    {exp.company}
                </p>

                <p className="text-xs text-gray-400 mb-4">
                    {exp.period}
                </p>

                {/* BULLETS */}
                <ul className="space-y-2 text-sm text-gray-400 mb-auto">
                    {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {point}
                    </li>
                    ))}
                </ul>
                </div>
            </motion.div>
            ))}
        </div>
        </motion.div>


      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
