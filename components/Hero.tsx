"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, MapPin, ShieldAlert } from "lucide-react";

const roles = [
  "Analyst SOC Junior",
  "Blue Team Defender",
  "Threat Hunter",
  "SIEM Engineer",
  "Incident Responder",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 50 : 90;
    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      } else {
        setText(
          deleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        );
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 cyber-grid"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge avec corners distinctifs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="corner-brackets inline-flex items-center gap-2 px-5 py-2 mb-8 bg-accent/5 border border-accent/20"
        >
          <ShieldAlert className="w-3 h-3 text-accent" />
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="font-mono text-sm text-accent tracking-wide">
            STATUS: ACTIVE // BLUE TEAM ON DUTY
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-primary mb-6 text-sm"
        >
          <span className="text-accent">[root@soc-niamey ~]$</span> whoami --verbose
        </motion.div>

        {/* Nom avec style display différent */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 glow-text tracking-wider uppercase"
        >
          Aboubacar
          <span className="block text-primary mt-2">Issaka Idi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xl md:text-2xl font-mono mb-4 h-8"
        >
          <span className="text-gray-400">&gt;_ </span>
          <span className="text-accent glow-accent terminal-cursor">{text}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-6"
        >
          SIEM Monitoring <span className="text-accent">//</span> Threat Hunting{" "}
          <span className="text-accent">//</span> Incident Response{" "}
          <span className="text-accent">//</span> Network Security
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="inline-flex items-center gap-2 text-gray-500 font-mono text-sm mb-10"
        >
          <MapPin className="w-4 h-4" /> Niamey, Niger
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="group px-6 py-3 bg-primary text-background font-mono font-bold rounded flex items-center gap-2 hover:bg-primary/80 transition animate-glow"
          >
            <span>Initiate Secure Channel</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="/cv-issaka.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-accent/50 text-accent font-mono rounded flex items-center gap-2 hover:bg-accent/10 transition"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
