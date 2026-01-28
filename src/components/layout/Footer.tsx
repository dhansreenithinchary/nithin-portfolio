"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative pt-12 pb-8"
      style={{
        background:
          "linear-gradient(to bottom right,var(--default-body-bg-color) 0%,var(--theme-bg-gradient) 25%,var(--default-body-bg-color) 100%)",
      }}
    >
      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-65 h-px bg-emerald-400/40 blur-md" />

      {/* BACKGROUND TEXTURE */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

      <div className="relative container-80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Dhanasree Nithin Chary
            </h3>
            <p className="text-sm font-semibold text-gray-400 mt-1">
              Web Developer · UI Focused · Performance Driven
            </p>
          </div>

          {/* CENTER — SOCIALS */}
          <div className="flex items-center gap-5">
            {[
              {
                icon: Github,
                link: "https://vercel.com/dhanasree-nithin-charys-projects",
              },
              {
                icon: Linkedin,
                link: "https://linkedin.com/in/dhanasree-nithin-chary-a199ba381",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="relative w-10 h-10 flex items-center justify-center rounded-md bg-[#0c3a31] border border-white/10 text-emerald-400 transition hover:-translate-y-1"
                  style={{
                    boxShadow: "0 0 11px rgba(var(--primary-rgb), .55)",
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-md font-semibold text-white-800">
            © {new Date().getFullYear()} Dhanasree Nithin Chary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
