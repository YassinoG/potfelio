"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

type Variant = "cyan" | "violet" | "green";

const PROJECTS: {
  title: string;
  category: string;
  variant: Variant;
  desc: string;
  tags: string[];
}[] = [
  {
    title:    "Biometric Authentication System",
    category: "AI / Deep Learning",
    variant:  "cyan",
    desc:     "Facial authentication using Siamese Neural Networks trained on a custom dataset with Mediapipe landmark extraction and Adam optimizer. Deployed via Kivy for cross-platform use.",
    tags:     ["Python", "Deep Learning", "Siamese Network", "Mediapipe", "Kivy"],
  },
  {
    title:    "Apromed Management Platform",
    category: "Web Platform",
    variant:  "cyan",
    desc:     "Scalable internal management platform with integrated AI: FaceID authentication, OCR invoice archiving, Google Gemini reporting, and n8n automation workflows.",
    tags:     ["Full-Stack", "FaceID", "OCR", "Google Gemini", "n8n"],
  },
  {
    title:    "Capital Participation Platform",
    category: "Full-Stack",
    variant:  "violet",
    desc:     "React.js frontend with PHP REST API and MySQL database. Manages submission, monitoring, and validation of startup financing requests and investor participation.",
    tags:     ["React.js", "PHP", "MySQL", "REST API"],
  },
  {
    title:    "Intelligent Document Flow System",
    category: "AI / NLP",
    variant:  "violet",
    desc:     "Automated document management using Hugging Face and Haystack for classification, semantic search, and summarization. Integrated via REST and GraphQL APIs.",
    tags:     ["NLP", "Hugging Face", "Haystack", "REST", "GraphQL"],
  },
  {
    title:    "IoT Systems Simulation",
    category: "IoT",
    variant:  "green",
    desc:     "Smart parking system with proximity sensors and LED indicators. Intelligent cabinet with door-status and temperature monitoring. Simulated end-to-end in Cisco Packet Tracer.",
    tags:     ["IoT", "Cisco Packet Tracer", "Sensors", "Logic Circuits"],
  },
  {
    title:    "Process Challenge Game",
    category: "Algorithms",
    variant:  "green",
    desc:     "Competitive multiplayer Python game with three algorithmic challenges: grid coloring, forest navigation, and zombie confrontation. Multithreaded engine with backtracking, DP, and greedy approaches.",
    tags:     ["Python", "Algorithms", "Multithreading", "Backtracking", "DP"],
  },
];

const TITLE_HOVER: Record<Variant, string> = {
  cyan:   "group-hover:text-[#00D4FF]",
  violet: "group-hover:text-[#A78BFA]",
  green:  "group-hover:text-[#00FF9F]",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0A1628]/45">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] font-mono text-[#00D4FF] tracking-widest uppercase mb-3">
            04 · Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#E2E8F0] mb-12 section-heading">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass-card rounded-lg p-6 flex flex-col group transition-all duration-300 hover:scale-[1.02] hover:border-[#00D4FF]/28"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded tracking-widest uppercase proj-badge-${project.variant}`}>
                  {project.category}
                </span>
                <div className="flex gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a href="#" aria-label="GitHub" className="text-[#64748B] hover:text-[#00D4FF] transition-colors">
                    <GitHubIcon size={15} />
                  </a>
                  <a href="#" aria-label="Demo" className="text-[#64748B] hover:text-[#00D4FF] transition-colors">
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className={`font-heading font-semibold text-[#E2E8F0] text-base leading-snug mb-3 transition-colors duration-200 ${TITLE_HOVER[project.variant]}`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-[#475569] px-2 py-0.5 bg-[#0A1628] rounded border border-[#1E3A5F]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
