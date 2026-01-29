"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">

      {/* RADIAL GLOW LAYER */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(var(--primary-rgb), .18), rgba(var(--primary-rgb), .08) 40%, transparent)",
        }}
      />

      {/* DIAGONAL TEXTURE LAYER */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

      {/* CONTENT (80%) */}
      <div className="relative container-80">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-15">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-300 mb-4">
               — WEB DEVELOPER PORTFOLIO —
            </p>

            <h1 className="text-[30px] sm:text-[52px] md:text-[38px] leading-[1.12] font-semibold text-white mb-6">
              Building modern, scalable web applications using{" "}
              <span className="text-lime-400">
                React & Next.js
              </span>
            </h1>

            <p className="text-gray-300 max-w-140 leading-relaxed mb-6">
              I’m Dhanasree Nithin Chary, a web developer focused on building modern,
              responsive, and high-performance web applications with
              clean UI, scalable code, and smooth user experiences.
            </p>

            <div className="flex items-center gap-6">
              {/* View Projects */}
              <Link href="#projects" className="px-6 py-3 bg-emerald-400 text-black font-medium rounded hover:bg-emerald-300 transition">
                View Projects
              </Link>

              {/* Contact Me */}
              <Link href="#contact" className="text-emerald-400 font-medium hover:underline" >
                Contact Me →
              </Link>
            </div>

          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-end"
          >
            {/* WRAPPER CONTROLS IMAGE + BACKGROUND */}
            <div className="relative w-95 h-95 flex items-center justify-center">
              
              {/* PROFILE BACKGROUND */}
              <div className="absolute inset-0 rounded-2xl bg-[#0000001a]" />

              {/* TOP-RIGHT DECORATIVE SQUARE BORDER */}
              <div className="absolute -top-6 -right-12 w-25 h-25"
              style={{
                border: "6px dashed rgba(255,255,255,.05)",
              }}/>

              {/* TOP-LEFT DECORATIVE SQUARE BORDER */}
              <div className="absolute -bottom-6 -left-12 w-25 h-25"
              style={{
                border: "6px dashed rgba(255,255,255,.05)",
              }}/>

              {/* PROFILE IMAGE */}
              <Image
                src="/profile.png"
                alt="Developer Illustration"
                width={380}
                height={380}
                priority
                className="relative z-10"
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
