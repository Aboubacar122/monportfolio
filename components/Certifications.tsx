"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Loader } from "lucide-react";
import { useState } from "react";

const obtained = [
  { name: "Cybersecurity Defense Analyst Pathway", issuer: "Cisco Networking Academy", year: "2025", featured: true },
  { name: "Elastic Observability Engineer", issuer: "Elastic", year: "2025" },
  { name: "Data Analysis with Kibana", issuer: "Elastic", year: "2025" },
  { name: "Fortinet FCA — Cybersecurity Associate", issuer: "Fortinet", year: "2025" },
  { name: "Fortinet FCF — Cybersecurity Fundamentals", issuer: "Fortinet", year: "2024" },
  { name: "Mettre en place un SIEM : ELK Stack", issuer: "OpenClassrooms", year: "2024" },
  { name: "Mettre en place Nagios", issuer: "OpenClassrooms", year: "2024" },
  { name: "Introduction à la Cybersécurité", issuer: "Cisco", year: "2024" },
  { name: "Cybersecurity Fundamentals", issuer: "OpenClassrooms", year: "2024" },
  { name: "Microsoft 360", issuer: "Microsoft", year: "2024" },
  { name: "Concevez votre réseau TCP/IP", issuer: "OpenClassrooms", year: "2024" },
  { name: "Bases sur les réseaux", issuer: "OpenClassrooms", year: "2024" },
  { name: "Principe des bases de données", issuer: "OpenClassrooms", year: "2024" },
  { name: "Initiez-vous à Linux", issuer: "OpenClassrooms", year: "2024" },
  { name: "Prise en main de Windows Server", issuer: "OpenClassrooms", year: "2024" },
];

const inProgress = [
  { name: "Elastic Certified SIEM Analyst", issuer: "Elastic", year: "2026" },
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2026" },
  { name: "Blue Team Level 1 (BTL1)", issuer: "Security Blue Team", year: "2026" },
  { name: "SC-200 — Microsoft Security Operations", issuer: "Microsoft", year: "2026" },
];

export default function Certifications() {
  const [tab, setTab] = useState<"obtained" | "progress">("obtained");
  const list = tab === "obtained" ? obtained : inProgress;
  const Icon = tab === "obtained" ? CheckCircle2 : Loader;
  const color = tab === "obtained" ? "text-accent" : "text-warning";

  return (
    <section id="certs" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> cat /certs.txt
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> Certifications
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-2">
            ▸ {obtained.length} obtenues · {inProgress.length} en cours
          </p>
        </motion.div>

        <div className="flex gap-2 mb-8 font-mono text-sm">
          <button
            onClick={() => setTab("obtained")}
            className={`px-4 py-2 rounded border transition ${
              tab === "obtained"
                ? "bg-accent/10 border-accent text-accent"
                : "border-gray-700 text-gray-400 hover:border-accent/50"
            }`}
          >
            <CheckCircle2 className="inline w-4 h-4 mr-2" />
            Obtenues ({obtained.length})
          </button>
          <button
            onClick={() => setTab("progress")}
            className={`px-4 py-2 rounded border transition ${
              tab === "progress"
                ? "bg-warning/10 border-warning text-warning"
                : "border-gray-700 text-gray-400 hover:border-warning/50"
            }`}
          >
            <Loader className="inline w-4 h-4 mr-2" />
            En cours ({inProgress.length})
          </button>
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {list.map((c, i) => (
            <motion.div
              key={`${c.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`glass rounded-lg p-4 text-center hover:border-primary transition relative ${
                (c as any).featured ? "ring-2 ring-accent/50 shadow-lg shadow-accent/20" : ""
              }`}
            >
              {(c as any).featured && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-accent text-background text-[10px] font-mono font-bold rounded-full animate-pulse">
                  TOP
                </span>
              )}
              <Award className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="text-xs font-mono text-white mb-1 leading-tight">{c.name}</p>
              <p className="text-[10px] text-gray-400 mb-2">{c.issuer}</p>
              <div className={`flex items-center justify-center gap-1 text-xs font-mono ${color}`}>
                <Icon className="w-3 h-3" />
                <span>{c.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
