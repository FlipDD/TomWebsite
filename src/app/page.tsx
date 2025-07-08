"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: "1",
    imageUrl: "/portfolio/ana-moura.png",
    alt: "Ana Moura - Desliza"
  },
  {
    id: "2",
    imageUrl: "/portfolio/vsp.png",
    alt: "VSP"
  },
  {
    id: "3",
    imageUrl: "/portfolio/sharkskin.png",
    alt: "Sharkskin"
  },
  {
    id: "4",
    imageUrl: "/portfolio/richie.png",
    alt: "Richie"
  },
  {
    id: "5",
    imageUrl: "/portfolio/nenny.png",
    alt: "Nenny"
  },
  {
    id: "6",
    imageUrl: "/portfolio/murta-jura.png",
    alt: "Murta x Jura"
  },
  {
    id: "7",
    imageUrl: "/portfolio/logo-photo.png",
    alt: "Logo Photo"
  },
  {
    id: "8",
    imageUrl: "/portfolio/hodierno.png",
    alt: "Hodierno"
  },
  {
    id: "9",
    imageUrl: "/portfolio/capital-bulgaria.png",
    alt: "Capital Bulgaria"
  },
  {
    id: "10",
    imageUrl: "/portfolio/blaya.png",
    alt: "Blaya"
  },
  {
    id: "11",
    imageUrl: "/portfolio/7777angels.png",
    alt: "7777 Angels"
  }
];

export default function Home() {
  const [workHover, setWorkHover] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between" style={{ minHeight: '100vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/ANA MOURA/Screenshot 2025-03-04 at 16.07.13.png"
          alt="Landing Background"
          fill
          className="object-cover w-full h-full object-top"
          priority
        />
      </div>

      {/* Logo */}
      <div className="absolute top-2 left-2 z-20">
        <Image src="/logo/logowhite.png" alt="Tomás Mateus Logo" width={330} height={90} />
      </div>

      {/* Sidebar Navigation */}
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-16 z-30 select-none">
        <div className="text-right space-y-1">
          {/* WORK button with hover */}
          <div
            className="relative group"
            onMouseEnter={() => setWorkHover(true)}
            onMouseLeave={() => setWorkHover(false)}
          >
            <Link
              href="/portfolio"
              className="block transition-all duration-200 focus:outline-none relative group"
              style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '33px', fontWeight: 800, lineHeight: 'normal' }}
            >
              <span className="relative">
                WORK
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            {/* Sub-links appear on hover */}
            <div
              className={`overflow-hidden transition-all duration-300 text-white text-lg font-medium font-[Manrope] text-right pl-4 ${workHover ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} flex flex-col space-y-1`}
              style={{ transitionProperty: 'max-height, opacity' }}
            >
              <Link href="/portfolio" className="hover:underline text-2xl font-medium mt-2">all</Link>
              <Link href="#" className="hover:underline text-2xl font-medium">music videos</Link>
              <Link href="#" className="hover:underline text-2xl font-medium">short-film</Link>
            </div>
          </div>
          {/* CONTACT button */}
          <Link
            href="/contact"
            className="block transition-all duration-200 mt-8 relative group"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '33px', fontWeight: 800, lineHeight: 'normal' }}
          >
            <span className="relative">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full text-center z-40">
        <p className="text-white text-[20px] font-[Manrope] m-0 p-2">
          © 2025 Tomás Mateus. All rights reserved
        </p>
      </footer>
    </div>
  );
}
