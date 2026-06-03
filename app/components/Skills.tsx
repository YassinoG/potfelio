"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiAngular,
  SiNodedotjs, SiPython, SiSpringboot, SiDocker,
  SiPostgresql, SiMysql, SiGit, SiFlask, SiDjango,
  SiN8N, SiGooglegemini, SiHuggingface, SiJavascript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Settings2, CheckCircle2, Award } from "lucide-react";
import type { IconType } from "react-icons";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const TECH_STACK: Tech[] = [
  { name: "React",        icon: SiReact,        color: "#61DAFB" },
  { name: "Next.js",      icon: SiNextdotjs,    color: "#FFFFFF" },
  { name: "TypeScript",   icon: SiTypescript,   color: "#3178C6" },
  { name: "JavaScript",   icon: SiJavascript,   color: "#F7DF1E" },
  { name: "Angular",      icon: SiAngular,      color: "#DD0031" },
  { name: "Node.js",      icon: SiNodedotjs,    color: "#339933" },
  { name: "Python",       icon: SiPython,       color: "#3776AB" },
  { name: "Java",         icon: FaJava,         color: "#ED8B00" },
  { name: "Spring Boot",  icon: SiSpringboot,   color: "#6DB33F" },
  { name: "Flask",        icon: SiFlask,        color: "#FFFFFF" },
  { name: "Django",       icon: SiDjango,       color: "#092E20" },
  { name: "Docker",       icon: SiDocker,       color: "#2496ED" },
  { name: "PostgreSQL",   icon: SiPostgresql,   color: "#4169E1" },
  { name: "MySQL",        icon: SiMysql,        color: "#4479A1" },
  { name: "Git",          icon: SiGit,          color: "#F05032" },
  { name: "n8n",          icon: SiN8N,          color: "#EA4B71" },
  { name: "Gemini AI",    icon: SiGooglegemini, color: "#4285F4" },
  { name: "Hugging Face", icon: SiHuggingface,  color: "#FFD21E" },
];

const SAP_AREAS = [
  {
    title: "Production Planning",
    subtitle: "SAP PP · S/4HANA",
    color: "#7C3AED",
    items: [
      "Material Master (FG / SFG / RM)",
      "Bills of Materials (BOM)",
      "Routings & Work Centers",
      "MRP Runs & Production Orders",
      "Order Release, Confirmation & GR",
    ],
  },
  {
    title: "Quality Management",
    subtitle: "SAP QM · S/4HANA",
    color: "#00D4FF",
    items: [
      "Inspection Plans & Types (01/03/04)",
      "Master Inspection Characteristics",
      "Results Recording",
      "Usage Decisions & Code Groups",
      "In-Process & GR Inspections",
    ],
  },
  {
    title: "Certification & Methods",
    subtitle: "SAP BTP · Agile",
    color: "#00FF9F",
    items: [
      "SAP BTP Associate (In Progress)",
      "Joule AI & SAP Business AI Badges",
      "Business Process Mapping",
      "Blueprinting & Documentation",
      "Agile & Scrum Methodologies",
    ],
  },
];

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const Icon = tech.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 group cursor-default transition-all duration-300 hover:-translate-y-1"
      style={{
        "--brand": tech.color,
      } as React.CSSProperties}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${tech.color}18`,
          boxShadow: `0 0 0 1px ${tech.color}25`,
        }}
      >
        <Icon size={26} color={tech.color} />
      </div>
      <span className="text-[11px] font-mono text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors text-center leading-tight">
        {tech.name}
      </span>
    </motion.div>
  );
}

function SapCard({
  area,
  index,
}: {
  area: (typeof SAP_AREAS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: `${area.color}20` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="p-2.5 rounded-lg shrink-0"
          style={{ background: `${area.color}15`, border: `1px solid ${area.color}30` }}
        >
          <Settings2 size={18} style={{ color: area.color }} />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-[#E2E8F0] leading-snug">
            {area.title}
          </h3>
          <p className="text-[11px] font-mono mt-0.5" style={{ color: `${area.color}CC` }}>
            {area.subtitle}
          </p>
        </div>
      </div>

      <ul className="space-y-2">
        {area.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8]">
            <CheckCircle2
              size={13}
              className="shrink-0 mt-0.5"
              style={{ color: area.color }}
            />
            {item}
          </li>
        ))}
      </ul>

      <div
        className="mt-auto pt-4 border-t"
        style={{ borderColor: `${area.color}15` }}
      >
        <div className="flex items-center gap-1.5">
          <Award size={12} style={{ color: area.color }} />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: `${area.color}99` }}>
            DXC Technology
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0A1628]/45">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] font-mono text-[#00D4FF] tracking-widest uppercase mb-3">
            02 · Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#E2E8F0] mb-4 section-heading">
            Technical Arsenal
          </h2>
          <p className="text-[#64748B] text-sm mb-12 max-w-lg">
            Technologies I build with day-to-day and enterprise systems I configure and optimize.
          </p>
        </motion.div>

        {/* ── DEV STACK ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono tracking-widest uppercase text-[#00D4FF]">
              Dev Stack
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#00D4FF]/30 to-transparent" />
          </div>

          <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {TECH_STACK.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── SAP CONSULTING ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-mono tracking-widest uppercase text-[#7C3AED]">
              SAP Consulting
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#7C3AED]/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SAP_AREAS.map((area, i) => (
              <SapCard key={area.title} area={area} index={i} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
