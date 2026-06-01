"use client";

import { motion } from "framer-motion";
import { Code2, Settings2, MapPin, GraduationCap } from "lucide-react";

const VIEWPORT = { once: true, margin: "-80px" as const };

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] font-mono text-[#00D4FF] tracking-widest uppercase mb-3">
            01 · About
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#E2E8F0] mb-14 section-heading">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-[#94A3B8] leading-relaxed mb-5">
              I&apos;m a{" "}
              <span className="text-[#E2E8F0] font-medium">
                web developer and SAP PP/QM consultant
              </span>{" "}
              with a Bachelor&apos;s degree in Business Computing from ISGT Tunis.
              I bridge the gap between technical implementation and business process
              optimization.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-5">
              On the dev side I build scalable full-stack platforms and integrate AI
              modules — facial recognition, OCR, NLP, and workflow automation. On the
              SAP side I configure end-to-end PP and QM processes in S/4HANA discrete
              manufacturing environments.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              I&apos;m currently open to both software engineering and SAP consulting
              opportunities.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#64748B]">
                <MapPin size={15} className="text-[#00D4FF] shrink-0" />
                Tunis, Tunisia
              </div>
              <div className="flex items-center gap-3 text-sm text-[#64748B]">
                <GraduationCap size={15} className="text-[#00D4FF] shrink-0" />
                Bachelor in Business Computing · ISGT · 2022–2025
              </div>
            </div>
          </motion.div>

          {/* Identity cards */}
          <div className="space-y-4">
            {/* Web Dev card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="glass-card rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/20">
                  <Code2 size={18} className="text-[#00D4FF]" />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-[#E2E8F0]">Web Developer</h3>
                  <p className="text-[11px] font-mono text-[#64748B]">Full-Stack · AI Integration</p>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "React, Angular, Node.js, Spring Boot, Flask, Django",
                  "AI: FaceID, OCR (invoice archiving), Google Gemini, n8n",
                  "Docker · Git · REST & GraphQL APIs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#00D4FF] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SAP card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="glass-card rounded-lg p-6 border-[#7C3AED]/18"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded bg-[#7C3AED]/10 border border-[#7C3AED]/20">
                  <Settings2 size={18} className="text-[#7C3AED]" />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-[#E2E8F0]">SAP PP/QM Consultant</h3>
                  <p className="text-[11px] font-mono text-[#64748B]">DXC Technology · S/4HANA</p>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "SAP S/4HANA — Production Planning (PP) & Quality Management (QM)",
                  "MRP, BOM, Routings, Work Centers, Production Orders",
                  "Inspection Plans, MICs, Usage Decisions, Code Groups",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#7C3AED] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
