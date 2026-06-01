"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";

const ROLES = [
  "Web Developer",
  "Full-Stack Engineer",
  "SAP PP/QM Consultant",
  "AI Integration Specialist",
];

function useTypingEffect(strings: string[]) {
  const [index, setIndex]       = useState(0);
  const [text, setText]         = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          ),
        deleting ? 45 : 95
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, strings]);

  return text;
}

export default function Hero() {
  const role = useTypingEffect(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center cyber-grid-bg overflow-hidden"
    >
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-[#00D4FF]/[0.045] blur-[130px]" />
        <div className="absolute w-[420px] h-[420px] rounded-full bg-[#7C3AED]/[0.04] blur-[90px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/[0.06]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00FF9F] animate-pulse" />
          <span className="text-[11px] font-mono text-[#94A3B8] tracking-widest uppercase">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-[clamp(2.8rem,10vw,6.5rem)] font-heading font-bold tracking-tight leading-none mb-4"
        >
          <span className="text-[#E2E8F0]">YASSINE</span>
          <br />
          <span className="gradient-text">GOUTI</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-lg sm:text-xl font-mono text-[#94A3B8] mb-6 h-7"
        >
          <span className="text-[#00D4FF] typing-cursor">{role}</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Building scalable web platforms and integrating intelligent systems.
          <br className="hidden sm:block" /> Based in Tunis, Tunisia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#050B18] font-heading font-semibold rounded-sm text-sm tracking-wide transition-all duration-200 hover:bg-[#00D4FF]/90 hover:shadow-[0_0_32px_rgba(0,212,255,0.4)]"
          >
            <Mail size={15} /> Get In Touch
          </a>
          <a
            href="/YASSINE-GOUTI-CV-25.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#00D4FF]/30 text-[#00D4FF] font-heading font-semibold rounded-sm text-sm tracking-wide transition-all duration-200 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]"
          >
            <Download size={15} /> Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://linkedin.com/in/yassin-gouti-5a2527262"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#64748B] hover:text-[#00D4FF] transition-colors duration-200"
          >
            <LinkedInIcon size={19} />
          </a>
          <a
            href="https://github.com/YassinoG"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#64748B] hover:text-[#00D4FF] transition-colors duration-200"
          >
            <GitHubIcon size={19} />
          </a>
          <a
            href="mailto:yassingouty@gmail.com"
            aria-label="Email"
            className="text-[#64748B] hover:text-[#00D4FF] transition-colors duration-200"
          >
            <Mail size={19} />
          </a>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#64748B]"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-[#00D4FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
