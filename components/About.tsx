"use client";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Terminal as TerminalIcon, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> cat /profile.md
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> À propos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 corner-brackets glass rounded-lg p-8 relative scan-line overflow-hidden"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              Professionnel en tant qu&apos;<span className="text-primary">Analyste SOC Junior</span>,
              étudiant en deuxième année de <span className="text-accent">Master Professionnel
              en Télécommunication Informatique</span>, option Réseau de Données et Sécurité (RDS),
              et détenteur d&apos;une Licence Professionnelle en télécommunications informatiques
              à l&apos;École Supérieure des Communications Électroniques et de la Poste (ESCEP)
              de Niamey.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Passionné par les <span className="text-primary">nouvelles technologies</span> et la
              résolution de problèmes, je mets mon expertise au service de la défense des
              infrastructures critiques. Mes missions quotidiennes : monitoring SIEM temps réel,
              qualification d&apos;incidents, threat hunting et optimisation des règles de
              corrélation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-accent font-mono">// Stack maîtrisée :</span>{" "}
              Wazuh, ELK Stack, Security Onion, Nagios, Zabbix, pfSense, Fortigate, Active Directory,
              VMware/Proxmox, Docker.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-primary/10 font-mono text-xs">
              <div>
                <p className="text-accent mb-1">▸ Langues</p>
                <p className="text-gray-400">Français (Excellent) · Anglais (technique)</p>
              </div>
              <div>
                <p className="text-accent mb-1">▸ Atouts</p>
                <p className="text-gray-400">Analyse · Adaptation · Confidentialité</p>
              </div>
              <div>
                <p className="text-accent mb-1">▸ Hobbies</p>
                <p className="text-gray-400">Musique · Voyage · Football · Marche</p>
              </div>
              <div>
                <p className="text-accent mb-1">▸ Spécialité</p>
                <p className="text-gray-400">Blue Team · SIEM · Threat Hunting</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Badge icon={<GraduationCap />} title="Master 2 MPTI" sub="ESCEP · Option RDS · 2024-2025" />
            <Badge icon={<GraduationCap />} title="Licence Pro LPTI" sub="Télécom Informatique · 2024" />
            <Badge icon={<ShieldCheck />} title="Analyste SOC Junior" sub="Depuis Décembre 2025" />
            <Badge icon={<Award />} title="Fortinet FCF + FCA" sub="Certified Cybersecurity" />
            <Badge icon={<TerminalIcon />} title="Home Lab" sub="ELK + Wazuh + Security Onion" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="glass rounded-lg p-4 flex items-center gap-3 hover:border-primary transition">
      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-bold text-white truncate">{title}</p>
        <p className="text-xs text-gray-400 font-mono truncate">{sub}</p>
      </div>
    </div>
  );
}
