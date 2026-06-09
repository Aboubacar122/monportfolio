import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aboubacar Issaka Idi — Analyst SOC Junior | Blue Team",
  description:
    "Portfolio d'Aboubacar Issaka Idi, Analyst SOC Junior basé à Niamey. SIEM (Wazuh, ELK, Security Onion), Threat Hunting, Master MPTI option RDS @ ESCEP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
