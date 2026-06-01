"use client";

import { motion } from "framer-motion";

const DEV_GROUPS: Record<string, string[]> = {
  Languages:        ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  Frameworks:       ["React.js", "Next.js", "Angular", "Node.js", "Spring Boot", "Flask", "Django", "Vite.js"],
  "AI & ML":        ["Deep Learning", "Siamese Networks", "NLP", "Hugging Face", "Haystack", "Mediapipe", "Google Gemini"],
  "Tools & DevOps": ["Docker", "Git & GitHub", "REST APIs", "GraphQL", "n8n", "Figma"],
  Database:         ["MySQL", "PostgreSQL", "phpMyAdmin"],
};

const SAP_GROUPS: Record<string, string[]> = {
  "SAP Modules":    ["SAP S/4HANA", "Production Planning (PP)", "Quality Management (QM)"],
  "PP Expertise":   ["Material Master (FG/SFG/RM)", "BOM", "Routings", "Work Centers", "MRP", "Production Orders"],
  "QM Expertise":   ["Inspection Plans", "Types 01/03/04", "MICs", "Usage Decisions", "Results Recording"],
  Methodologies:    ["Business Process Mapping", "Blueprinting", "Agile & Scrum", "Cross-functional Collaboration"],
  Certification:    ["SAP BTP Associate (In Progress)", "Joule AI Badge", "SAP Business AI Badge"],
};

function Chip({ label, accent }: { label: string; accent: "cyan" | "violet" }) {
  const isCyan = accent === "cyan";
  return (
    <span
      className="px-3 py-1 text-xs font-mono rounded cursor-default transition-all duration-200 hover:scale-105"
      style={{
        background: isCyan ? "rgba(0,212,255,0.07)" : "rgba(124,58,237,0.07)",
        border:     `1px solid ${isCyan ? "rgba(0,212,255,0.22)" : "rgba(124,58,237,0.22)"}`,
        color:      isCyan ? "#00D4FF" : "#A78BFA",
      }}
    >
      {label}
    </span>
  );
}

function SkillPanel({
  title,
  groups,
  accent,
  delay,
}: {
  title: string;
  groups: Record<string, string[]>;
  accent: "cyan" | "violet";
  delay?: number;
}) {
  const isCyan     = accent === "cyan";
  const accentColor = isCyan ? "#00D4FF" : "#7C3AED";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: delay ?? 0 }}
      className="glass-card rounded-lg p-6 flex flex-col gap-6"
      style={{ borderColor: `${accentColor}20` }}
    >
      {/* Panel header */}
      <div className="flex items-center gap-3">
        <div
          className="h-px flex-1"
          style={{ background: `linear-gradient(90deg, ${accentColor}50, transparent)` }}
        />
        <h3
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: accentColor }}
        >
          {title}
        </h3>
        <div
          className="h-px flex-1"
          style={{ background: `linear-gradient(270deg, ${accentColor}50, transparent)` }}
        />
      </div>

      {/* Skill groups */}
      {Object.entries(groups).map(([groupLabel, items]) => (
        <div key={groupLabel}>
          <p
            className="text-[10px] font-mono tracking-widest uppercase mb-2.5"
            style={{ color: `${accentColor}99` }}
          >
            {groupLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <Chip key={item} label={item} accent={accent} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0A1628]/45">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] font-mono text-[#00D4FF] tracking-widest uppercase mb-3">
            02 · Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#E2E8F0] mb-12 section-heading">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <SkillPanel title="Web Development" groups={DEV_GROUPS} accent="cyan"   delay={0.05} />
          <SkillPanel title="SAP Consulting"  groups={SAP_GROUPS} accent="violet" delay={0.15} />
        </div>
      </div>
    </section>
  );
}
