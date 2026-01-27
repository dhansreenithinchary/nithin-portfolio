"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // show button when hero is NOT visible
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50
                    w-10 h-10 flex items-center justify-center
                    bg-[#0c3a31]/90 backdrop-blur
                    border border-emerald-400/60
                    text-emerald-400
                    hover:bg-[#0c3a31]
                    transition"
                    style={{
                        boxShadow: "0 0 10px rgba(var(--primary-rgb), .25)",
                        cursor:"pointer",
                    }}
                    >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
