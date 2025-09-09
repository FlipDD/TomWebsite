import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700", "800"] });

export const metadata: Metadata = {
  title: "Tomás Mateus - Colorist Portfolio",
  description: "Freelance Colorist based in Lisbon, Portugal. Specializing in creative looks for music videos and films.",
  keywords: "colorist, color grading, music video, film, lisbon, portugal",
  authors: [{ name: "Tomás Mateus" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "Tomás Mateus - Colorist Portfolio",
    description: "Freelance Colorist based in Lisbon, Portugal",
    type: "website",
    images: [
      {
        url: "/Icon/Icon Website_512x512.ico",
        width: 512,
        height: 512,
        alt: "Tomás Mateus - Colorist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Mateus - Colorist Portfolio",
    description: "Freelance Colorist based in Lisbon, Portugal",
    images: ["/Icon/Icon Website_512x512.ico"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tomás Mateus" />
      </head>
      <body className={`${manrope.className} antialiased`}>
          {children}
      </body>
    </html>
  );
}
