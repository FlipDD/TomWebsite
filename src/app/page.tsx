"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Fixed Logo */}
      <div className="fixed top-9 left-9 z-50 mix-blend-difference">
        <Image src="/logo/logowhite.png" alt="Tomás Mateus Logo" width={330} height={90} />
      </div>

      {/* Fixed Sidebar Navigation */}
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-9 z-40 select-none mix-blend-difference">
        <div className="text-right space-y-1">
          {/* WORK button */}
          <button
            onClick={() => document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="block transition-all duration-500 ease-out focus:outline-none hover:scale-110 cursor-pointer"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '28px', fontWeight: 650, lineHeight: 'normal', width: 'fit-content', marginLeft: 'auto' }}
          >
            WORK
          </button>
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

                                       {/* Fixed Footer */}
              <footer className="fixed bottom-0 left-0 w-full text-center z-40">
               <p className="text-white text-[20px] font-[Manrope] m-0 p-2">
                 © 2025 Tomás Mateus. All rights reserved
               </p>
             </footer>

      {/* Section 1: Landing Page */}
      <section className="relative min-h-screen w-full flex flex-col justify-between" style={{ minHeight: '100vh' }}>
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
      </section>

      {/* Section 2: Portfolio */}
      <section id="portfolio-section" className="relative min-h-screen bg-black">
        {/* Portfolio Grid */}
        <main className="flex-1 flex items-center justify-center min-h-screen">
          <div className="w-full grid grid-cols-3 gap-0">
            {projects.map((project, i) => (
              <Link key={i} href={`/work/${project.slug}`} className="relative w-full aspect-[16/9] group">
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
                  <span className="text-white font-medium text-center px-4 font-[Manrope]" style={{ fontSize: '24px' }}>
                    {project.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
