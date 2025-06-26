import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomás Mateus - Colorist Portfolio",
  description: "Freelance Colorist based in Lisbon, Portugal. Specializing in creative looks for music videos and films.",
  keywords: "colorist, color grading, music video, film, lisbon, portugal",
  authors: [{ name: "Tomás Mateus" }],
  openGraph: {
    title: "Tomás Mateus - Colorist Portfolio",
    description: "Freelance Colorist based in Lisbon, Portugal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
          {children}
      </body>
    </html>
  );
}
