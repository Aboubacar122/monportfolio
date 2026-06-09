"use client";
import { motion } from "framer-motion";
import { Lock, Calendar } from "lucide-react";

const projects = [
  {
    title: "SIEM Security Onion @ NITA Transfert",
    org: "Mission terrain",
    period: "2025",
    desc: "Déploiement d'un SIEM Security Onion pour la supervision réseau et la sécurité. Configuration des règles de détection, dashboards et alertes en environnement de production.",
    tech: ["Security Onion", "Suricata", "Zeek", "Elastic"],
    status: "DEPLOYED",
    color: "text-accent",
  },
  {
    title: "SIEM ELK + Wazuh (Lab)",
    org: "Home Lab",
    period: "2024-2025",
    desc: "Mise en place complète d'un SIEM avec ELK Stack et Wazuh sur VMware Workstation. Supervision réseau, détection d'intrusion et corrélation d'événements.",
    tech: ["ELK Stack", "Wazuh", "VMware", "Filebeat"],
    status: "PRODUCTION",
    color: "text-primary",
  },
  {
    title: "Active Directory + GPO (PME 50 users)",
    org: "Projet académique",
    period: "2024",
    desc: "Déploiement complet d'Active Directory pour entreprise fictive : 50 utilisateurs, 5 groupes, stratégies de groupe (GPO) appliquées et automatisation PowerShell.",
    tech: ["Windows Server 2025", "AD", "GPO", "PowerShell"],
    status: "COMPLETED",
    color: "text-violet",
  },
  {
    title: "PKI Windows Server 2022",
    org: "Projet académique",
    period: "2024",
    desc: "Déploiement et administration d'une infrastructure à clés publiques sur Windows Server 2022 avec gestion des certificats et autorité de certification.",
    tech: ["Windows Server", "PKI", "AD CS", "TLS"],
    status: "COMPLETED",
    color: "text-warning",
  },
  {
    title: "DNS Bind9 + DNSSEC + AD",
    org: "Lab sécurité",
    period: "2025",
    desc: "Serveur DNS Bind9 (Ubuntu) pour domaine Active Directory (Windows Server 2025) avec activation et configuration DNSSEC pour sécurité maximale.",
    tech: ["Bind9", "DNSSEC", "Ubuntu", "AD DNS"],
    status: "LAB",
    color: "text-primary",
  },
  {
    title: "Pare-feu Fortigate + pfSense IDS/IPS",
    org: "Lab sécurité",
    period: "2024",
    desc: "Configuration d'un pare-feu Fortigate avec mise en place d'un système IDS/IPS, comparaison avec une solution pfSense en environnement virtualisé.",
    tech: ["Fortigate", "pfSense", "Suricata", "IDS/IPS"],
    status: "LAB",
    color: "text-warning",
  },
  {
    title: "Mini SIEM — Centralisation logs",
    org: "Projet personnel",
    period: "2024",
    desc: "Système de centralisation des logs avec envoi vers Kibana, création de dashboards et alertes pour la corrélation d'événements de sécurité.",
    tech: ["Logstash", "Kibana", "Beats", "Bash"],
    status: "ACTIVE",
    color: "text-accent",
  },
  {
    title: "Cloud privé Nextcloud",
    org: "Projet personnel",
    period: "2024",
    desc: "Mise en place d'un cloud privé avec Nextcloud sur VMware Workstation pour le stockage sécurisé et le partage de fichiers en interne.",
    tech: ["Nextcloud", "VMware", "Linux", "Apache"],
    status: "DEPLOYED",
    color: "text-accent",
  },
  {
    title: "Supervision Zabbix + Grafana",
    org: "Projet académique",
    period: "2024",
    desc: "Implémentation d'un outil de supervision Zabbix intégré à Grafana pour le monitoring temps réel d'une infrastructure réseau.",
    tech: ["Zabbix", "Grafana", "SNMP", "InfluxDB"],
    status: "PRODUCTION",
    color: "text-violet",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> ./projects --list
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> Projets réalisés
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="corner-brackets glass rounded-lg p-6 relative overflow-hidden group hover:border-primary transition"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-black/40 border-l border-b border-accent/30">
                <span className={`font-mono text-xs ${p.color}`}>● {p.status}</span>
              </div>

              <Lock className="w-7 h-7 text-primary mb-4 mt-4" />

              <h3 className="text-base font-bold mb-1 group-hover:text-primary transition leading-tight">
                {p.title}
              </h3>
              <p className="text-xs font-mono text-accent mb-1">// {p.org}</p>
              <p className="text-xs font-mono text-gray-500 mb-3 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {p.period}
              </p>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 bg-primary/5 border border-primary/20 text-primary rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
