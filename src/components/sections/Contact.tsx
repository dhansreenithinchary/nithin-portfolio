"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

const fadeUpLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUpRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit Mobile Number");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully 🚀");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-14"
      style={{
        background:
          "linear-gradient(to bottom right,var(--default-body-bg-color) 0%,var(--theme-bg-gradient) 25%,var(--default-body-bg-color) 100%)",
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
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]
        bg-[repeating-linear-gradient(130deg,#ffffff_0,#ffffff_1px,transparent_1px,transparent_4px)]" />

      <div className="relative container-80">
        {/* HEADER */}
        <motion.div
          className="relative container-80 text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold tracking-widest text-emerald-400 mb-2">
            — CONTACT —
          </p>

          <h2 className="text-3xl md:text-2xl font-semibold text-white mb-2">
            Let’s work together
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or need help building your digital presence?
            Feel free to reach out — I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT — FORM */}
          <motion.div
            variants={fadeUpLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative backdrop-blur bg-[#0f2f28]/60 border border-white/10 rounded-lg p-8">

            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-400/40" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-400/40" />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FULL NAME */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name :
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Enter Name"
                  className="w-full bg-[#0c3a31] border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Mail Address :
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Enter Mail Address"
                  className="w-full bg-[#0c3a31] border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Mobile Number :
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  value={form.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
                    if (value.length <= 10) {
                      setForm({ ...form, phone: value });
                    }
                  }}
                  placeholder="Enter Mobile Number"
                  className="w-full bg-[#0c3a31] border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message :
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Type Here"
                  className="w-full bg-[#0c3a31] border border-white/10 px-4 py-2 text-sm text-white resize-none focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex px-6 py-2 bg-emerald-400 text-black text-sm font-semibold hover:bg-emerald-300 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT — CONTACT INFO */}
          <motion.div
              variants={fadeUpRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative backdrop-blur bg-[#0f2f28]/60 border border-white/10 rounded-lg p-8">

            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-emerald-400/40" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-emerald-400/40" />

            <h3 className="text-lg font-semibold text-emerald-400 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
                <p>1-9-286/2/4/5/2, Ramnagar Gundu Rd, Hyderabad, Telangana 500020.</p>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-4 h-4 text-emerald-400 mt-1" />
                <p>+91-7702855208
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-4 h-4 text-emerald-400 mt-1" />
                <p>nithinchary.d@gmail.com</p>
              </div>
            </div>

            <div className="mt-6 border border-white/10 rounded overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.056764292416!2d78.50862472390646!3d17.40906330218279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9999b3256e1b%3A0xa7c7a59fd930855f!2sRamnagar%20Gundu%2C%20Adikmet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1769547650555!5m2!1sen!2sin" 
                      className="w-full h-60" loading="lazy"/>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
