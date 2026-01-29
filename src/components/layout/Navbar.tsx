"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  /* ------------------ SCROLL SPY ------------------ */
  useEffect(() => {
    const onScroll = () => {
      const offset = 120;
      let current = "home";

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = item.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ------------------ LOCK BODY SCROLL ------------------ */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0b2a23]/95 backdrop-blur">
      {/* INNER CONTAINER */}
      <div className="container-80 h-18 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-white font-semibold text-xl">
          D<span className="text-emerald-400">.</span>
          Nithin<span className="text-emerald-400">.</span>C
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-l">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition-colors ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP ACTION */}
        <a
          href="/Nithin-Resume-2026.pdf"
          target="_blank"
          className="hidden md:inline-flex px-5 py-2 text-sm font-semibold bg-emerald-400 text-black hover:bg-emerald-300 transition"
        >
          Resume
        </a>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* ------------------ MOBILE MENU ------------------ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-18 inset-x-0 z-40 bg-[#0b2a23]/97 backdrop-blur border-t border-white/5">
            <div className="container-80 py-6 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base transition ${
                      isActive
                        ? "text-emerald-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <a href="/resume.pdf" target="_blank" className="mt-4 inline-flex justify-center px-5 py-2 text-sm font-semibold bg-emerald-400 text-black hover:bg-emerald-300 transition">
                Resume
              </a>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-6 text-white"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
