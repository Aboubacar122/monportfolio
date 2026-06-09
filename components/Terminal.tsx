"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Line = { type: "in" | "out"; text: string };

const COMMANDS: Record<string, string[]> = {
  whoami: [
    "Aboubacar Issaka Idi",
    "Role     : Analyst SOC Junior",
    "Location : Niamey, Niger (Seguia Recasement)",
    "Age      : 23",
    "Status   : Defending the perimeter // Blue Team",
  ],
  skills: [
    "[SIEM]        Wazuh, ELK Stack, Security Onion, SELKS",
    "[MONITORING]  Nagios, Zabbix, Grafana, Kibana",
    "[NETWORK]     pfSense, Fortigate (FCF/FCA), IDS/IPS, IPSec",
    "[SYSTEM]      Windows Server 2022/2025, Linux, AD+GPO, PKI",
    "[VIRT]        VMware, Proxmox, Hyper-V, Docker",
    "[DB]          MySQL, PostgreSQL, Oracle DB",
    "[SCRIPT]      PowerShell, Python, Bash",
  ],
  experience: [
    "Dec 2025-...     Analyst SOC Junior",
    "Nov 2025-Jan 26  Stage Admin Sys @ Zamani Telecom",
    "Mar-Mai 2025     Stage Assistance Reseau @ Niger Telecom",
    "Aug-Dec 2024     Stage Assistant Info @ ATIRE",
    "Jun-Aug 2024     Stage Reseau/Systeme @ ATIRE",
    "Mai-Jul 2023     Stage Reseau Telecom @ Niger Telecom",
  ],
  projects: [
    "1. SIEM Security Onion @ NITA Transfert",
    "2. SIEM ELK + Wazuh (Lab)",
    "3. Active Directory + GPO PME 50 users",
    "4. PKI Windows Server 2022",
    "5. DNS Bind9 + DNSSEC + AD",
    "6. Pare-feu Fortigate + pfSense IDS/IPS",
    "7. Mini SIEM centralisation logs",
    "8. Cloud prive Nextcloud",
    "9. Supervision Zabbix + Grafana",
  ],
  certs: [
    "[OK] Cybersecurity Defense Analyst Pathway  2025  *TOP*",
    "[OK] Elastic Observability Engineer         2025",
    "[OK] Data Analysis with Kibana              2025",
    "[OK] Fortinet FCA                           2025",
    "[OK] Fortinet FCF                           2024",
    "[OK] SIEM ELK Stack + Nagios                2024",
    "[OK] + 9 autres (cybersec, reseau, BDD)",
    "[..] Elastic Certified SIEM Analyst         (en cours)",
    "[..] CompTIA Security+                      (en cours)",
    "[..] Blue Team Level 1 (BTL1)               (en cours)",
    "[..] SC-200 Microsoft Security              (en cours)",
  ],
  formation: [
    "2024-2025 : Master 2 MPTI option RDS  @ ESCEP Niamey",
    "2023-2024 : Licence Pro LPTI RDS      @ ESCEP Niamey",
    "2022-2023 : Diplome Tech. Sup. Telecom @ ESCEP Niamey",
    "2020-2021 : Baccalaureat serie D      @ Lycee Mariama",
  ],
  contact: [
    "email      : Aboubacarissaka161@gmail.com",
    "linkedin   : /in/aboubacar-issaka-915909317",
    "tel        : +227 96 13 57 22",
    "whatsapp   : +227 91 77 15 31",
  ],
  languages: ["Francais (Excellent) / Anglais (technique en cours)"],
  hobbies: ["Musique / Voyage / Football / Marche"],
  help: [
    "Available commands:",
    "  whoami       - identite",
    "  skills       - stack technique",
    "  experience   - parcours pro",
    "  projects     - projets realises",
    "  certs        - certifications",
    "  formation    - diplomes",
    "  contact      - coordonnees",
    "  languages    - langues parlees",
    "  hobbies      - centres d'interet",
    "  ls           - list directories",
    "  sudo         - try at your own risk",
    "  clear        - clear terminal",
  ],
  sudo: ["[sudo] password for aboubacar: ", "Sorry, try again. (HoneyPot triggered)"],
  ls: ["about/  skills/  experience/  projects/  certs/  contact/"],
};

const BANNER = [
  "+--------------------------------------------+",
  "|  BLUE TEAM TERMINAL v3.0                  |",
  "|  Aboubacar Issaka Idi - secure shell      |",
  "+--------------------------------------------+",
  "Type 'help' to list available commands.",
  "",
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(
    BANNER.map((t) => ({ type: "out" as const, text: t }))
  );
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const out: Line[] = [{ type: "in", text: input }];
    if (cmd === "clear") { setLines([]); setInput(""); return; }
    if (cmd === "") { setLines((l) => [...l, ...out]); setInput(""); return; }

    const res = COMMANDS[cmd];
    if (res) res.forEach((r) => out.push({ type: "out", text: r }));
    else out.push({ type: "out", text: `command not found: ${cmd} (try 'help')` });

    setLines((l) => [...l, ...out]);
    setInput("");
  };

  return (
    <section id="terminal" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> /bin/bash
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> Terminal interactif
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="corner-brackets glass rounded-lg overflow-hidden shadow-2xl shadow-primary/20"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-background/60 border-b border-primary/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-danger" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-accent" />
            </div>
            <p className="text-xs font-mono text-gray-400 ml-2">
              aboubacar@blue-team:~$
            </p>
          </div>

          <div className="p-4 font-mono text-sm h-[28rem] overflow-y-auto bg-background/40">
            {lines.map((l, i) => (
              <div
                key={i}
                className={l.type === "in" ? "text-white" : "text-accent"}
                style={{ whiteSpace: "pre" }}
              >
                {l.type === "in" && (
                  <span className="text-primary">aboubacar@blue:~$ </span>
                )}
                {l.text}
              </div>
            ))}
            <form onSubmit={handle} className="flex">
              <span className="text-primary">aboubacar@blue:~$&nbsp;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent outline-none text-white caret-accent"
                spellCheck={false}
              />
            </form>
            <div ref={endRef} />
          </div>
        </motion.div>

        <p className="text-center text-xs font-mono text-gray-500 mt-4">
          Try: <span className="text-primary">whoami</span> //{" "}
          <span className="text-primary">skills</span> //{" "}
          <span className="text-primary">projects</span> //{" "}
          <span className="text-primary">help</span>
        </p>
      </div>
    </section>
  );
}
