"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import type { Metadata } from "next";

const fadeUpContainer: Variants  = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "PRIZMABRIXX — Company Website",
    desc: "Official corporate website representing PRIZMABRIXX’s brand identity, services, and digital capabilities.",
    image: "/projects/prizmabrixx.png",
    live: "https://prizmabrixx.in/index.php",
    details: [
      "Designed and developed the official company website aligned with brand vision and business strategy",
      "Structured service offerings to clearly communicate branding, digital, and marketing solutions",
      "Focused on professional UI/UX to establish trust and credibility for enterprise clients",
      "Built a fully responsive experience optimized for desktop, tablet, and mobile devices",
      "Collaborated with internal teams to align content, design, and operational goals",
      "Ensured scalability and maintainability for long-term business growth",
      "Played a dual role by connecting design decisions with operational strategy"
    ],
  },
  {
    title: "Dynamix Web Ads — Company Website",
    desc: "Conversion-focused digital marketing agency website designed to generate leads and showcase services.",
    image: "/projects/dynamixwebads.png",
    live: "https://dynamixwebads.com/home",
    details: [
      "Designed a lead-generation focused website for a digital marketing and advertising agency",
      "Clearly presented marketing services, workflows, and value propositions",
      "Implemented strong call-to-actions (CTAs) to guide users toward enquiries",
      "Optimized the website with a mobile-first responsive design approach",
      "Applied SEO-friendly structure for better discoverability and performance",
      "Balanced visual appeal with clarity to reflect a performance-driven agency mindset",
      "Positioned the website as a digital sales asset rather than just an informational site"
    ],
  },
  {
    title: "GK Zenith – Virtual Simulation",
    desc: "Interactive real-estate availability and 360° apartment walkthrough platform.",
    image: "/projects/gkzenith.png",
    live: "https://gkzenith.virtualsimulationcompany.com",
    details: [
      "Built as a real-estate availability product, not just a website",
      "Displays flat-level status (Available / Sold)",
      "Interactive tower and floor-based selection",
      "360° apartment walkthrough experience",
      "Day & night lighting visualization modes",
      "Optimized UX for customers and sales teams",
      "Responsive and performance-optimized UI",
    ],
  },
  {
    title: "Tea N Coffee India",
    desc: "Dual-brand platform presenting Tea and Coffee experiences under one domain.",
    image: "/projects/teancoffeeindia.png",
    live: "https://www.teancoffeeindia.com",
    details: [
      "Two brand experiences (Tea & Coffee) under a single domain",
      "Story-driven brand presentation",
      "Clear content separation with unified branding",
      "Mobile-first and SEO-friendly structure",
      "Focused on brand trust and storytelling",
    ],
  },
  {
    title: "Sunstone MBBS Abroad",
    desc: "Education consultancy platform guiding students pursuing MBBS abroad.",
    image: "/projects/sunstoneabroad.png",
    live: "https://sunstoneabroad.com",
    details: [
      "Designed for students planning MBBS abroad",
      "Clear explanation of countries, universities, and admission process",
      "Student and parent-friendly content structure",
      "Lead generation focused enquiry flow",
      "Scalable content architecture",
    ],
  },
  {
    title: "Avicenna (KG)",
    desc: "University information platform for international MBBS aspirants.",
    image: "/projects/avicenna.png",
    live: "https://avicenna.com.kg",
    details: [
      "Official university informational website",
      "Explains academic programs and campus life",
      "Designed for international student audience",
      "Large-scale content structuring",
      "Professional academic tone and layout",
    ],
  },
  {
    title: "Wxer Wealth Management",
    desc: "Financial services platform focused on unlisted stocks and wealth management.",
    image: "/projects/wxerwealth.png",
    live: "https://wxerwealth.com",
    details: [
      "Focused on unlisted stock information",
      "Explains wealth management services clearly",
      "Finance-domain professional UI",
      "Trust and credibility-focused design",
      "Responsive and performance-safe layout",
    ],
  },
];


const CARD_WIDTH = 420;
const AUTOPLAY_DELAY = 4000;

// 🔁 duplicate projects for looping
const loopedProjects = [...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects, ...projects];
const START_INDEX = projects.length;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of real-world projects built by Nithin Chary using modern web technologies.",
};

export default function Projects() {
    const [active, setActive] = useState(START_INDEX);
    const [paused, setPaused] = useState(false);
    const [openProject, setOpenProject] = useState<any>(null);


  /* AUTOPLAY (INFINITE) */
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
        setActive((prev) => prev + 1);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(id);
    }, [paused]);

    useEffect(() => {
        if (active >= projects.length * 2) {
            // jump back to middle copy WITHOUT animation
            setActive(projects.length);
        }
        }, [active]);

  return (
    <section id="projects" className="relative py-12"
      style={{
        background: "linear-gradient(to bottom right,var(--default-body-bg-color) 0%,var(--theme-bg-gradient) 25%,var(--default-body-bg-color) 100%)",
      }}
    >
      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* BACKGROUND TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

      {/* RADIAL GLOW LAYER */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          background:"radial-gradient(circle, rgba(var(--primary-rgb), .18), rgba(var(--primary-rgb), .08) 40%, transparent)",
        }}
      />

      {/* HEADER */}
      <motion.div className="relative container-80 text-center mb-10" variants={fadeUpContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} >
        <motion.p variants={fadeUpItem} className="text-sm font-semibold tracking-widest text-emerald-400 mb-2">
            — PROJECTS —
        </motion.p>

        <motion.h2 variants={fadeUpItem} className="text-3xl md:text-2xl font-semibold text-white mb-2" >
            Projects I’ve worked on
        </motion.h2>

        <motion.p variants={fadeUpItem} className="text-gray-400 max-w-xl mx-auto" >
            Real-world projects showcasing modern web development practices.
        </motion.p>
      </motion.div>

      {/* CAROUSEL */}
      <div className="relative overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <motion.div className="flex gap-10 justify-center"
            animate={{ x: -(active * CARD_WIDTH) }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            drag="x"
            dragConstraints={false}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
                const moved = Math.round(info.offset.x / CARD_WIDTH);
                setActive((prev) => prev - moved);
                setPaused(false);
            }} >

          {loopedProjects.map((project, i) => (
            <div key={i} className="min-w-[380px] md:min-w-[420px] backdrop-blur bg-[#0f2f28]/60 border border-white/10 rounded-lg overflow-hidden">
              {/* IMAGE */}
              <div className="relative h-44 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover"/>
              </div>

              {/* CONTENT */}
              <div className="p-8 relative">
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-400/40" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-400/40" />

                <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-white">
                        {project.title}
                    </h3>

                    <button onClick={() => setOpenProject(project)} className="w-8 h-8 flex items-center justify-center rounded-md border border-white/10 bg-[#0c3a31] text-emerald-400"
                        style={{
                            boxShadow: "0 0 11px rgba(var(--primary-rgb), .55)",
                        }}>
                        ℹ
                    </button>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  {project.desc}
                </p>

                <a href={project.live} target="_blank" className="inline-flex items-center gap-2 text-emerald-400 hover:underline text-sm">
                  Live <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {projects.map((_, i) => {
            const isActive = active % projects.length === i;

            return (
            <button key={i} onClick={() => { setActive(projects.length + i); setPaused(true);}}
                className={`h-[3px] rounded-full transition-all duration-300 ${isActive ? "w-10 bg-emerald-400" : "w-4 bg-white/20"}`}
                style={
                isActive
                    ? { boxShadow: "0 0 10px rgba(var(--primary-rgb), .6)" }
                    : undefined
                }/>
            );
        })}
      </div>

      {openProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpenProject(null)}/>

            {/* MODAL */}
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-[90%] max-w-xl bg-[#0f2f28] border border-white/10 rounded-lg p-6 z-10">
                <h4 className="text-lg font-semibold text-white mb-4">
                    {openProject.title}
                </h4>

                <ul className="space-y-3 text-sm text-gray-300">
                    {openProject.details.map((point: string, i: number) => (
                    <li key={i} className="flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {point}
                    </li>
                    ))}
                </ul>

                <button onClick={() => setOpenProject(null)} className="mt-6 px-4 py-2 text-sm font-semibold bg-emerald-400 text-black rounded">
                    Close
                </button>
            </motion.div>
        </div>
      )}

      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
