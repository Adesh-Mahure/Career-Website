import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Adesh Mahure | DevOps Engineer",
  description:
    "DevOps Engineer with expertise in CI/CD, cloud infrastructure, and automation. Building scalable and reliable systems.",
  keywords: [
    "DevOps Engineer",
    "CI/CD",
    "Cloud Infrastructure",
    "Automation",
    "Node.js",
    "AI",
    "Machine Learning",
    "Web Development",
  ],
  authors: [{ name: "Adesh Mahure" }],
  openGraph: {
    title: "Adesh Mahure | DevOps Engineer",
    description:
      "DevOps Engineer with expertise in CI/CD, cloud infrastructure, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
