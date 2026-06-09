"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AlertTriangle, Shield, Activity, Server } from "lucide-react";

type Alert = { id: number; type: string; src: string; sev: "LOW" | "MED" | "HIGH"; time: string };

const TYPES = ["Brute Force", "SQL Injection", "Port Scan", "Malware Drop", "DNS Tunneling", "C2 Beacon", "Privilege Esc"];
const SEVS: Alert["sev"][] = ["LOW", "MED", "HIGH"];

const rnd = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
const randIp = () => `${rnd(1, 223)}.${rnd(0, 255)}.${rnd(0, 255)}.${rnd(0, 255)}`;
const pick = <T,>(arr: T[]) => arr[rnd(0, arr.length - 1)];

export default function SiemDashboard() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [stats, setStats] = useState({ events: 38427, blocked: 891, threats: 38, uptime: 99.97 });

  useEffect(() => {
    const tick = () => {
      const newAlert: Alert = {
        id: Date.now() + Math.random(),
        type: pick(TYPES),
        src: randIp(),
        sev: pick(SEVS),
        time: new Date().toLocaleTimeString("fr-FR"),
      };
      setAlerts((prev) => [newAlert, ...prev].slice(0, 6));
      setStats((s) => ({
        events: s.events + rnd(1, 15),
        blocked: s.blocked + rnd(0, 3),
        threats: s.threats + (Math.random() > 0.8 ? 1 : 0),
        uptime: s.uptime,
      }));
    };
    tick();
    const iv = setInterval(tick, 2500);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="siem" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-accent mb-2">
            <span className="text-gray-500">[root@soc-niamey ~]$</span> tail -f /var/log/siem.log
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wide uppercase">
            <span className="text-primary glow-text">{">"}</span> SOC Dashboard{" "}
            <span className="text-sm font-mono text-accent">[ LIVE ]</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Kpi icon={<Activity />} label="Events / 24h" value={stats.events.toLocaleString()} color="primary" />
          <Kpi icon={<Shield />} label="Blocked" value={stats.blocked.toString()} color="accent" />
          <Kpi icon={<AlertTriangle />} label="Active Threats" value={stats.threats.toString()} color="danger" />
          <Kpi icon={<Server />} label="Uptime %" value={stats.uptime.toFixed(2)} color="warning" />
        </div>

        <div className="corner-brackets glass rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-background/60 border-b border-primary/20">
            <p className="font-mono text-sm text-primary">// Real-time Alert Feed</p>
            <span className="flex items-center gap-2 text-xs font-mono text-accent">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> STREAMING
            </span>
          </div>
          <div className="divide-y divide-primary/10">
            {alerts.map((a) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -20, backgroundColor: "rgba(79,158,255,0.1)" }}
                animate={{ opacity: 1, x: 0, backgroundColor: "rgba(0,0,0,0)" }}
                transition={{ duration: 1.5 }}
                className="px-4 py-3 flex items-center gap-4 font-mono text-sm"
              >
                <span className="text-gray-500 text-xs">{a.time}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    a.sev === "HIGH"
                      ? "bg-danger/20 text-danger border border-danger/40"
                      : a.sev === "MED"
                      ? "bg-warning/20 text-warning border border-warning/40"
                      : "bg-primary/20 text-primary border border-primary/40"
                  }`}
                >
                  {a.sev}
                </span>
                <span className="text-white flex-1">{a.type}</span>
                <span className="text-gray-400 text-xs hidden md:block">{a.src}</span>
              </motion.div>
            ))}
            {alerts.length === 0 && (
              <p className="px-4 py-6 text-center font-mono text-gray-500 text-sm">
                Awaiting events…
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpi({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    primary: "text-primary border-primary/30",
    accent: "text-accent border-accent/30",
    danger: "text-danger border-danger/30",
    warning: "text-warning border-warning/30",
  };
  return (
    <div className={`glass rounded-lg p-4 ${colorMap[color]} border`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono text-gray-400 uppercase">{label}</span>
        <span className={colorMap[color].split(" ")[0]}>{icon}</span>
      </div>
      <p className={`text-2xl font-bold font-mono ${colorMap[color].split(" ")[0]}`}>{value}</p>
    </div>
  );
}
