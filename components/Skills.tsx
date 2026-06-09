"use client";
import { motion } from "framer-motion";
import { Shield, Search, AlertTriangle, Activity, Server, Database, HardDrive, Wifi } from "lucide-react";

const categories = [
  {
    icon: <Shield />,
    title: "SIEM & Detection",
    skills: ["Wazuh", "ELK Stack", "Security Onion", "SELKS", "Sigma Rules"],
  },
  {
    icon: <Search />,
    title: "Monitoring & Supervision",
    skills: ["Nagios", "Zabbix", "Grafana", "Kibana", "Beats / Filebeat"],
  },
  {
    icon: <AlertTriangle />,
    title: "Sécurité Réseau",
    skills: ["pfSense", "Fortigate (FCF/FCA)", "Suricata", "IDS/IPS", "IPSec / VPN"],
  },
  {
    icon: <Server />,
    title: "Administration Système",
    skills: ["Windows Server 2022/2025", "Active Directory + GPO", "DNS Bind9 / DNSSEC", "PKI", "WDS / MDT"],
  },
  {
    icon: <HardDrive />,
    title: "Virtualisation",
    skills: ["VMware Workstation/ESXi", "Proxmox", "Hyper-V", "Docker", "Nextcloud"],
  },
  {
    icon: <Database />,
    title: "Bases de Données",
    skills: ["MySQL", "PostgreSQL", "Oracle DB"],
  },
  {
    icon: <Wifi />,
    title: "Réseaux & Telecom",
    skills: ["Cisco / Maipu", "VLAN", "Switching", "Routing", "BLR"],
  },
  {
    icon: <Activity />,
    title: "Scripting & Automation",
    skills: ["PowerShell", "Python", "Bash"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> ls ./skills --all
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> Compétences techniques
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="corner-brackets glass rounded-lg p-5 hover:border-primary transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white font-mono text-sm">
                  <span className="text-accent">{">"}</span> {cat.title}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {cat.skills.map((s) => (
                  <li key={s} className="text-xs text-gray-400 font-mono flex items-start gap-2">
                    <span className="text-accent mt-0.5">▸</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
