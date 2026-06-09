"use client";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

const links = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "certs", href: "#certs" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 glass border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <ShieldAlert className="w-6 h-6 text-accent group-hover:animate-pulse" />
          <span className="font-display text-primary glow-text font-bold tracking-wider">
            AII<span className="text-accent">/</span>SEC
          </span>
        </a>
        <ul className="hidden md:flex gap-5 font-mono text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="text-accent">#</span>{l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 border border-accent/50 rounded text-accent text-sm font-mono hover:bg-accent/10 transition"
        >
          [./contact]
        </a>
      </div>
    </motion.nav>
  );
}
