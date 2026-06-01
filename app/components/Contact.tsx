"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { LinkedInIcon } from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] font-mono text-[#00D4FF] tracking-widest uppercase mb-3">
            05 · Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#E2E8F0] mb-5">
            Let&apos;s Build Something
          </h2>
          <p className="text-[#64748B] leading-relaxed max-w-md mx-auto mb-12">
            Whether you have a project in mind, a question about my work, or just want
            to connect — my inbox is always open.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <a
            href="mailto:yassingouty@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] text-[#050B18] font-heading font-semibold rounded-sm text-base transition-all duration-200 hover:bg-[#00D4FF]/90 hover:shadow-[0_0_44px_rgba(0,212,255,0.45)]"
          >
            <Send size={18} />
            yassingouty@gmail.com
          </a>
        </motion.div>

        {/* Secondary contact info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
        >
          <a
            href="https://linkedin.com/in/yassin-gouti-5a2527262"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#64748B] hover:text-[#00D4FF] transition-colors"
          >
            <LinkedInIcon size={15} />
            <span className="font-mono">LinkedIn</span>
          </a>
          <a
            href="tel:+21627264481"
            className="flex items-center gap-2 text-[#64748B] hover:text-[#00D4FF] transition-colors"
          >
            <Phone size={15} />
            <span className="font-mono">+216 27 264 481</span>
          </a>
          <div className="flex items-center gap-2 text-[#64748B]">
            <MapPin size={15} className="text-[#00D4FF]" />
            <span className="font-mono">Tunis, Tunisia</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 text-center"
      >
        <div className="divider-cyber mb-8" />
        <p className="text-[11px] font-mono text-[#334155] tracking-widest">
          YASSINE GOUTI &nbsp;·&nbsp; {new Date().getFullYear()} &nbsp;·&nbsp; Built with Next.js &amp; Tailwind CSS
        </p>
      </motion.footer>
    </section>
  );
}
