"use client";
import React from "react";
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
      <div className="absolute top-9 left-9 z-20 mix-blend-difference">
        <Image src="/logo/logowhite.png" alt="Tomás Mateus Logo" width={330} height={90} />
      </div>

      {/* Sidebar Navigation */}
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-9 z-30 select-none mix-blend-difference">
        <div className="text-right space-y-1">
          {/* WORK button */}
          <Link
            href="/portfolio"
            className="block transition-all duration-500 ease-out focus:outline-none hover:scale-110"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '28px', fontWeight: 650, lineHeight: 'normal', width: 'fit-content', marginLeft: 'auto' }}
          >
            WORK
          </Link>
          {/* CONTACT button */}
          <Link
            href="/contact"
            className="block transition-all duration-500 ease-out mt-8 hover:scale-110"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '28px', fontWeight: 650, lineHeight: 'normal', width: 'fit-content', marginLeft: 'auto' }}
          >
            CONTACT
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
