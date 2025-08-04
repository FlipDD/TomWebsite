"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: 'Ana Moura - Desliza',
    image: '/portfolio/ana-moura.png',
    slug: 'ana-moura',
  },
  {
    title: 'VSP',
    image: '/portfolio/vsp.png',
    slug: 'vsp',
  },
  {
    title: 'Sharkskin',
    image: '/portfolio/sharkskin.png',
    slug: 'sharkskin',
  },
  {
    title: 'Richie',
    image: '/portfolio/richie.png',
    slug: 'richie',
  },
  {
    title: 'Nenny',
    image: '/portfolio/nenny.png',
    slug: 'nenny',
  },
  {
    title: 'Murta x Jura',
    image: '/portfolio/murta-jura.png',
    slug: 'murta-jura',
  },
  {
    title: 'Logo Photo',
    image: '/portfolio/logo-photo.png',
    slug: 'logo-photo',
  },
  {
    title: 'Hodierno',
    image: '/portfolio/hodierno.png',
    slug: 'hodierno',
  },
  {
    title: 'Capital Bulgaria',
    image: '/portfolio/capital-bulgaria.png',
    slug: 'capital-bulgaria',
  },
  {
    title: 'Blaya',
    image: '/portfolio/blaya.png',
    slug: 'blaya',
  },
  {
    title: '7777 Angels',
    image: '/portfolio/7777angels.png',
    slug: '7777angels',
  },
];

export default function PortfolioGrid() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Logo */}
      <div className="absolute top-2 left-2 z-20">
        <Link href="/">
          <Image src="/logo/logowhite.png" alt="Tomás Mateus Logo" width={330} height={90} />
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-16 z-30 select-none">
        <div className="text-right space-y-1">
          {/* WORK button */}
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

      {/* Portfolio Grid */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full h-[100vh] max-h-screen grid grid-cols-3 gap-0">
          {projects.map((project, i) => (
            <Link key={i} href={`/work/${project.slug}`} className="relative w-full h-full aspect-[16/9] group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover w-full h-full"
                sizes="33vw"
                priority={i < 6}
              />
              {/* Overlay with title on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl md:text-3xl font-medium text-center px-4 font-[Manrope]">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full text-center z-40 bg-black">
        <p className="text-white text-[20px] font-[Manrope] m-0 p-2">
          © 2025 Tomás Mateus. All rights reserved
        </p>
      </footer>
    </div>
  );
} 