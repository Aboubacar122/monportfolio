"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle, Send, Phone } from "lucide-react";

const links = [
  { icon: <Mail />, label: "Email", value: "Aboubacarissaka161@gmail.com", href: "mailto:Aboubacarissaka161@gmail.com" },
  { icon: <Linkedin />, label: "LinkedIn", value: "/in/aboubacar-issaka-915909317", href: "https://www.linkedin.com/in/aboubacar-issaka-915909317" },
  { icon: <Phone />, label: "Téléphone", value: "+227 96 13 57 22", href: "tel:+22796135722" },
  { icon: <MessageCircle />, label: "WhatsApp", value: "+227 91 77 15 31", href: "https://wa.me/22791771531" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> ./contact --secure
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> Initiate
            <br />
            Secure Channel
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Une mission, une opportunité, un échange ? Mon canal est ouvert 24/7.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="corner-brackets glass rounded-lg p-5 flex items-center gap-4 hover:border-primary group transition"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:animate-glow flex-shrink-0">
                {l.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-gray-400 uppercase">{l.label}</p>
                <p className="font-mono text-white text-sm truncate">{l.value}</p>
              </div>
              <Send className="w-4 h-4 text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition flex-shrink-0" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-xs text-gray-500 border-t border-primary/10 pt-8"
        >
          <p>
            <span className="text-accent">●</span> Perimeter secured by{" "}
            <span className="text-primary">Aboubacar Issaka Idi</span> · {new Date().getFullYear()}
          </p>
          <p className="mt-2 text-[10px]">
            Niamey · Seguia Recasement · Niger
          </p>
        </motion.div>
      </div>
    </section>
  );
}
