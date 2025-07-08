import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700", "800"] });

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.className} antialiased`}>
          {children}
      </body>
    </html>
  );
}
