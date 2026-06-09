"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const xp = [
  {
    company: "NITA Transfert d'Argent",
    location: "Niamey, Niger",
    role: "Analyste SOC Junior",
    period: "Déc 2025 — Actuel",
    items: [
      "Analyse, qualification et évaluation temps réel des incidents",
      "Notification des alertes et déclenchement des procédures d'escalade",
      "Configuration et optimisation des règles de corrélation SIEM",
      "Threat Hunting proactif et veille sur les menaces",
      "Production d'indicateurs de performance (KPIs) et tableaux de bord",
    ],
    color: "text-accent",
  },
  {
    company: "Zamani Telecom",
    location: "Niamey, Niger",
    role: "Stagiaire — Administration systèmes & Support IT",
    period: "Nov 2025 — Jan 2026",
    items: [
      "Installation, configuration et maintenance serveurs Windows/Linux",
      "Gestion Active Directory (comptes, droits, GPO)",
      "Supervision services essentiels (DNS, DHCP, File Server)",
      "Déploiement avec WDS, MDT, WSUS",
      "Traitement de tickets utilisateurs et documentation",
    ],
    color: "text-primary",
  },
  {
    company: "Niger Telecom",
    location: "Niamey, Niger",
    role: "Stagiaire — Assistance technique Réseau",
    period: "Mar — Mai 2025",
    items: [
      "Suivi et maintenance équipements (PC, serveurs, routeurs, switches)",
      "Installation logiciels (Kaspersky, Windows...)",
      "Administration LAN, Wi-Fi, VLAN",
      "Dépannage et résolution problèmes de connectivité",
    ],
    color: "text-violet",
  },
  {
    company: "ATIRE",
    location: "Niamey, Niger",
    role: "Stagiaire — Assistant Informatique et Réseau",
    period: "Août — Déc 2024",
    items: [
      "Suivi et maintenance équipements informatiques",
      "Installation et configuration logiciels et mises à jour",
      "Administration du réseau local (LAN, Wi-Fi, VLAN)",
      "Configuration et maintenance switches/routeurs",
    ],
    color: "text-warning",
  },
  {
    company: "ATIRE",
    location: "Niamey, Niger",
    role: "Stagiaire — Réseau / Système",
    period: "Juin — Août 2024",
    items: [
      "Gestion et configuration serveurs Windows/Linux",
      "Surveillance via ELK Stack et Nagios",
      "Mise en place de politiques de sécurité (pare-feu, IDS/IPS)",
      "Installation VMs (VMware, Hyper-V, Proxmox)",
      "Automatisation via PowerShell et Python",
    ],
    color: "text-primary",
  },
  {
    company: "Niger Telecom",
    location: "Niamey, Niger",
    role: "Stagiaire — Réseau Telecom",
    period: "Mai — Juil 2023",
    items: [
      "Configuration et administration équipements réseau",
      "Surveillance du réseau via Zabbix",
      "Installation et configuration de la BLR",
      "Rédaction de rapports techniques",
    ],
    color: "text-violet",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> git log --experience
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> Expérience
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
          {xp.map((j, i) => (
            <motion.div
              key={`${j.company}-${i}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-8"
            >
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-primary animate-glow flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-background" />
              </div>

              <div className="corner-brackets glass rounded-lg p-6 hover:border-primary transition">
                <div className="flex flex-wrap items-start justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white">{j.role}</h3>
                  <span className={`font-mono text-xs ${j.color} whitespace-nowrap`}>
                    {j.period}
                  </span>
                </div>
                <p className="text-primary font-mono mb-1">// {j.company}</p>
                <p className="text-xs font-mono text-gray-500 mb-4">▸ {j.location}</p>
                <ul className="space-y-1">
                  {j.items.map((it, idx) => (
                    <li key={idx} className="text-sm text-gray-400 font-mono flex items-start gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
