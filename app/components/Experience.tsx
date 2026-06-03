"use client";

import { motion } from "framer-motion";

type Variant = "cyan" | "violet" | "green";

const EXPERIENCES: {
  role: string;
  company: string;
  period: string;
  location: string;
  variant: Variant;
  points: string[];
  tags: string[];
}[] = [
  {
    role:     "SAP PP/QM Functional Consultant",
    company:  "DXC Technology",
    period:   "2025 – 2026",
    location: "Training Project — Discrete Manufacturing",
    variant:  "violet",
    points: [
      "End-to-end SAP PP & QM integration simulation for brake system production",
      "Configured PP master data: material master (FG/SFG/RM), BOM, routings, work centers, production versions",
      "Performed MRP runs; managed production order lifecycle — release, confirmation, goods receipt",
      "Set up QM master data: inspection types (01/03/04), plans, MICs, code groups",
      "Resolved cross-module configuration inconsistencies between PP and QM",
    ],
    tags: ["SAP S/4HANA", "PP", "QM", "MRP", "Discrete Manufacturing"],
  },
  {
    role:     "PFE Intern — Full-Stack Developer",
    company:  "Apromed",
    period:   "Feb 2025 – May 2025",
    location: "Tunisia",
    variant:  "cyan",
    points: [
      "Designed and developed a scalable platform modernizing internal management processes",
      "Integrated FaceID authentication, OCR invoice archiving and scanning",
      "Built Google Gemini reporting and n8n automation workflows",
      "Strengthened security, automation, and decision-making infrastructure",
    ],
    tags: ["Full-Stack", "AI", "FaceID", "OCR", "Google Gemini", "n8n"],
  },
  {
    role:     "Full-Stack Developer Intern",
    company:  "OORB Robotics",
    period:   "Aug 2024",
    location: "Tunis",
    variant:  "cyan",
    points: [
      "Developed interactive Figma prototypes for UX and visual identity",
      "Full-stack development and deployment of the web platform, optimized for performance",
    ],
    tags: ["Figma", "Full-Stack", "Web Platform", "Performance"],
  },
  {
    role:     "Developer Intern",
    company:  "Vermeg",
    period:   "Aug 2023",
    location: "Lac, Tunis",
    variant:  "cyan",
    points: [
      "Designed and developed an employee management application",
      "Angular frontend + Spring Boot backend",
    ],
    tags: ["Angular", "Spring Boot", "HR System"],
  },
  {
    role:     "Bachelor in Business Computing",
    company:  "ISGT — Institut Supérieur de Gestion de Tunis",
    period:   "2022 – 2025",
    location: "Tunis",
    variant:  "green",
    points: [
      "Specialty: Business Information System (BIS)",
      "Core areas: Software Development, Business Process Management, Accounting",
      "SAP BTP Associate certification in progress",
    ],
    tags: ["BIS", "Software Development", "SAP BTP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] font-mono text-[#00D4FF] tracking-widest uppercase mb-3">
            03 · Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#E2E8F0] mb-16 section-heading">
            Career Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div
            aria-hidden
            className="exp-timeline-line absolute left-[22px] top-3 bottom-3 w-px hidden sm:block"
          />

          <div className="space-y-6 sm:space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-7 sm:pl-14 relative"
              >
                {/* Timeline dot — hidden on mobile */}
                <div
                  className={`exp-dot-${exp.variant} absolute left-[14px] top-6 w-[17px] h-[17px] rounded-full border-2 items-center justify-center -translate-x-1/2 bg-[#050B18] hidden sm:flex`}
                >
                  <div className={`exp-pip-${exp.variant} w-[7px] h-[7px] rounded-full`} />
                </div>

                {/* Card */}
                <div className="glass-card rounded-lg p-5 sm:p-6 flex-1 transition-all duration-300 hover:border-[#00D4FF]/25">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-[#E2E8F0] text-[1.05rem] leading-snug">
                        {exp.role}
                      </h3>
                      <p className={`exp-company-${exp.variant} text-sm font-semibold mt-0.5`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="text-[11px] font-mono text-[#64748B] tracking-widest">
                        {exp.period}
                      </p>
                      <p className="text-[11px] text-[#475569] mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                        <span className={`exp-bullet-${exp.variant} mt-[7px] w-[5px] h-[5px] rounded-full shrink-0`} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`exp-tag-${exp.variant} px-2 py-0.5 text-[11px] font-mono rounded`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
