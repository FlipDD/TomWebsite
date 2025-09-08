import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700", "800"] });

export const metadata: Metadata = {
  title: "Tomás Mateus - Colorist Portfolio",
  description: "Freelance Colorist based in Lisbon, Portugal. Specializing in creative looks for music videos and films.",
  keywords: "colorist, color grading, music video, film, lisbon, portugal",
  authors: [{ name: "Tomás Mateus" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Icon/Icon Website_16x16.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/Icon/Icon Website_32x32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/Icon/Icon Website_48x48.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/Icon/Icon Website_64x64.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/Icon/Icon Website_128x128.ico", sizes: "128x128", type: "image/x-icon" },
    ],
    apple: [
      { url: "/Icon/Icon Website_128x128.ico", sizes: "128x128", type: "image/x-icon" },
      { url: "/Icon/Icon Website_512x512.ico", sizes: "512x512", type: "image/x-icon" },
    ],
    other: [
      { rel: "mask-icon", url: "/Icon/Icon Website_32x32.ico", color: "#000000" },
    ],
  },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Icon/Icon Website_32x32.ico" type="image/x-icon" sizes="32x32" />
        <link rel="icon" href="/Icon/Icon Website_16x16.ico" type="image/x-icon" sizes="16x16" />
        <link rel="shortcut icon" href="/Icon/Icon Website_32x32.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tomás Mateus" />
        <link rel="apple-touch-icon" href="/Icon/Icon Website_128x128.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/Icon/Icon Website_128x128.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Icon/Icon Website_128x128.ico" />
        <link rel="apple-touch-icon" sizes="167x167" href="/Icon/Icon Website_128x128.ico" />
      </head>
      <body className={`${manrope.className} antialiased`}>
          {children}
      </body>
    </html>
  );
}
