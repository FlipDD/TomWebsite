"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: 'Ana Moura - Desliza',
    image: '/portfolio/ana-moura.jpg',
    slug: 'ana-moura',
  },
  {
    title: 'VSP AST - AGUARELA',
    image: '/portfolio/vsp.jpg',
    slug: 'vsp',
  },
  {
    title: 'Richie Campbell - Before I Lose My Voice',
    image: '/portfolio/richie.jpg',
    slug: 'richie',
  },
  {
    title: 'Nenny - Normal',
    image: '/portfolio/nenny.jpg',
    slug: 'nenny',
  },
  {
    title: 'Murta, JÜRA - INVISÍVEL',
    image: '/portfolio/murta-jura.jpg',
    slug: 'murta-jura',
  },
  {
    title: 'Hodierno',
    image: '/portfolio/hodierno.jpg',
    slug: 'hodierno',
  },
  {
    title: 'Capital da Bulgária - Família',
    image: '/portfolio/capital-bulgaria.jpg',
    slug: 'capital-bulgaria',
  },
  {
    title: 'BLAYA - Quero Saber',
    image: '/portfolio/blaya.jpg',
    slug: 'blaya',
  },
  {
    title: '7777 の天使 - All Ends With Nothing',
    image: '/portfolio/7777angels.jpg',
    slug: '7777angels',
  },
  {
    title: 'Ross K - What Youre Feeling',
    image: '/portfolio/rossk.jpg',
    slug: 'rossk_whatufeeling',
  },
  {
    title: 'Ricardo Ribeiro - Má Sorte',
    image: '/portfolio/ricardoribeiro.jpg',
    slug: 'ricardoribeiro_masorte',
  },
  {
    title: 'Aurora Pinto - Cães e Gatos',
    image: '/portfolio/aurora.jpg',
    slug: 'aurora_pinto',
  },
  {
    title: 'Pedro Mafama - milésimo de segundo ( feat Cheb Nassim )',
    image: '/portfolio/mafama.jpg',
    slug: 'pedro_mafama_milesimo',
  },
  {
    title: 'Napa feat. Van Zee - Infinito',
    image: '/portfolio/napa.jpg',
    slug: 'napa_vanzee',
  },
  {
    title: 'Sotaques 2025',
    image: '/portfolio/sotaques.jpg',
    slug: 'sotaques',
  },
  {
    title: 'LUCY VAL - ENFIM',
    image: '/portfolio/lucyval.jpg',
    slug: 'lucy_val',
  },
  {
    title: 'Mishlawi - Done Playing',
    image: '/portfolio/mishlawi.jpg',
    slug: 'mishlawi',
  },
  {
    title: 'TIXA - ACORDAR',
    image: '/portfolio/tixa-acordar.jpg',
    slug: 'tixa_acordar',
  },
  {
    title: 'TIXA - ME TIME',
    image: '/portfolio/tixa-metime.jpg',
    slug: 'tixa_metime',
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
        {/* Background Video */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            style={{ objectPosition: 'top' }}
          >
            <source src="/videolandingpage.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Section 2: Portfolio */}
      <section id="portfolio-section" className="relative min-h-screen bg-black">
        {/* Portfolio Grid */}
        <main className="w-full">
          <div className="w-screen overflow-x-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-screen">
              {projects.map((project, i) => (
                <Link key={i} href={`/work/${project.slug}`} className="relative w-full aspect-[16/9] group overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          </div>
        </main>
      </section>
    </div>
  );
}
