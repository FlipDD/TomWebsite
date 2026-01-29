'use client'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import { useState, useEffect } from 'react'

const projectFolders: { [key: string]: string } = {
  'ana-moura': 'Ana Moura - Desliza',
  'vsp': 'VSP AST - AGUARELA',
  'sharkskin': 'SHARKSKIN',
  'richie': 'Richie Campbell - Before I Lose My Mind',
  'nenny': 'Nenny - Normal',
  'murta-jura': 'Murta, JURA - INVISIVEL',
  'hodierno': 'Hodierno',
  'capital-bulgaria': 'Capital da Bulgaria - Familia',
  'blaya': 'BLAYA - Quero Saber',
  '7777angels': '7777 - All Ends With Nothing',
  'rossk_whatufeeling': 'Ross K - What You’re Feeling',
  'ricardoribeiro_masorte': 'Ricardo Ribeiro - Ma Sorte',
  'aurora_pinto': 'Aurora Pinto - Caes e Gatos',
  'pedro_mafama_milesimo': 'Pedro Mafama - milesimo de segundo',
  'napa_vanzee': 'Napa feat. Van Zee - Infinito',
  'sotaques': 'Sotaques 2025',
  'lucy_val': 'LUCY VAL - ENFIM',
  'mishlawi': 'Mishlawi - Done Playing',
  'tixa_acordar': 'TIXA - ACORDAR',
  'tixa_metime': 'TIXA - ME TIME',
  'ricardoribeiro_mare': 'Ricardo Ribeiro feat Ana Moura - Maré',
  'karlson_parece': 'Filipe Karlson - Parece, Parece',
  'tixa_diferente': 'TIXA - DIFERENTE',
  'naomy_atendeotelefone': 'Naomy Vissolela - Atende o Telefone'
}

interface Credit {
  title: string;
  people: string[];
}

interface Project {
  title: string;
  description: string;
  credits: Credit[];
  videoUrl?: string;
}

const projects: { [key: string]: Project } = {
  'ana-moura': {
    title: 'Ana Moura - Desliza',
    description: 'Music video for Ana Moura\'s single "Desliza"',
    credits: [
      { title: 'Director', people: ['André Canicos'] },
      { title: 'Production', people: ['One House Only'] },
      { title: 'Director of Photography', people: ['Bernardo Infante'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=05SRUBxRbQQ',
  },
  'vsp': {
    title: 'VSP AST - AGUARELA',
    description: 'Music video for VSP',
    credits: [
      { title: 'Director', people: ['Gonçalo Afonso'] },
      { title: 'Production', people: ['One House Only'] },
      { title: 'Director of Photography', people: ['Bernardo Infante'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=byXXO86c-Js',
  },
  'richie': {
    title: 'Richie Campbell - Before I Lose My Voice',
    description: 'Music video for Richie Campbell',
    credits: [
      { title: 'Director', people: ['Gonçalo Afonso'] },
      { title: 'Production', people: ['One House Only'] },
      { title: 'Director of Photography', people: ['Bernardo Infante'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=1adIP_umouw',
  },
  'nenny': {
    title: 'Nenny - Normal',
    description: 'Music video for Nenny',
    credits: [
      { title: 'Director', people: ['Leonor Patrocínio'] },
      { title: 'Production', people: ['One House Only'] },
      { title: 'Director of Photography', people: ['Pedro Patrocínio'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Xty4iPW1rZI',
  },
  'murta-jura': {
    title: 'Murta, JÜRA - INVISÍVEL',
    description: 'Music video for Murta x Jura',
    credits: [
      { title: 'Director', people: ['Leonor Patrocínio'] },
      { title: 'Producer', people: ['Theo Canto'] },
      { title: 'Director of Photography', people: ['Luís Silva Nunes'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=CFxlKSQU85w',
  },
  'hodierno': {
    title: 'Hodierno',
    description: 'Short Film for Hodierno',
    credits: [
      { title: 'Director', people: ['Gonçalo Fonseca'] },
      { title: 'Director of Photography', people: ['Matheus Kakeya Goulart'] },
    ],
    videoUrl: '',
  },
  'capital-bulgaria': {
    title: 'Capital da Bulgária - Família',
    description: 'Music video for Capital Bulgaria',
    credits: [
      { title: 'Production', people: ['One House Only'] }    
    ],
    videoUrl: 'https://www.youtube.com/watch?v=50X9v3bomC4&list=RDEMqtau8NR8bAl4PzPNzNcNGg&start_radio=1',
  },
  'blaya': {
    title: 'BLAYA - Quero Saber',
    description: 'Music video for Blaya',
    credits: [
      { title: 'Director', people: ['Andreia Pereira Silva', 'João Afonso Vaz'] },
      { title: 'Production', people: ['Maus da Fita'] },
      { title: 'Director of Photography', people: ['Duarte Felgueiras', 'Filipe Malveiro'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=GZvdvVrEhbs',
  },
  '7777angels': {
    title: '7777 の天使 - All Ends With Nothing',
    description: 'Music video for 7777 Angels',
    credits: [
      { title: 'Director', people: ['Inês Baptista', 'João Marques'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=5rKAEceBmPk',
    },
  'rossk_whatufeeling': {
    title: 'Ross K - What You’re Feeling',
    description: 'Music video for Ross K',
    credits: [
      { title: 'Director', people: ['João Marques'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=WKTyVlvF3Jk',
  },
  'ricardoribeiro_masorte': {
    title: 'Ricardo Ribeiro - Má Sorte',
    description: 'Music video for Ricardo Riberiro',
    credits: [
      { title: 'Director', people: ['André Caniços'] },
      { title: 'Co Production', people: ['Sons em Transito'] },
      { title: 'Director of Photography', people: ['Duarte Domingos'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=uJpooON1Z5o',
  },
  'aurora_pinto': {
    title: 'Aurora Pinto - Cães e Gatos',
    description: 'Music video for Aurora Pinto',
    credits: [
      { title: 'Director', people: ['Tomás Mateus'] },
      { title: 'Producer', people: ['Inês Mariz'] },
      { title: 'Director of Photography', people: ['Luís Silva Nunes'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=FyHnnA0-rRw',
},
  'pedro_mafama_milesimo': {
    title: 'Pedro Mafama - milésimo de segundo ( feat Cheb Nassim )',
    description: 'Music video for Pedro Mafama',
    credits: [
      { title: 'Director', people: ['André Caniços'] },
      { title: 'Producer', people: ['Riad Mansouri'] },
      { title: 'Director of Photography', people: ['Duarte Domingos'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=dnDoz8uMTb0',
},
  'napa_vanzee': {
    title: 'Napa feat. Van Zee - Infinito',
    description: 'Music video for Napa',
    credits: [
      { title: 'Written', people: ['Tomás Freitas'] },
      { title: 'Director', people: ['Tommy Loureiro', 'João Serrano'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=NFfZwjhpRNg',
},
  'sotaques': {
    title: 'Sotaques 2025',
    description: 'Promotional video for music festival Sotaques',
    credits: [
      { title: 'Director', people: ['André Caniços'] },
      { title: 'Director of Photography', people: ['Duarte Domingos'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=x52YSPhGGb8',
},
  'lucy_val': {
    title: 'LUCY VAL - ENFIM',
    description: 'Music video for Lucy Val',
    credits: [
      { title: 'Director', people: ['Maria Beatriz Castelos'] },
      { title: 'Director of Photography', people: ['Miguel Faustino '] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=R_1qGsiFlAs',
},
  'mishlawi': {
    title: 'Mishlawi - Done Playing',
    description: 'Music video for Mishlawi',
    credits: [
      { title: 'Director', people: ['Tommy Loureiro', 'João Serrano'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=kUosqISC_IQ',
},
  'tixa_acordar': {
    title: 'TIXA - ACORDAR',
    description: 'Music video for TIXA',
    credits: [
      { title: 'Director', people: ['Valdir Furtado', 'Ana Lagartixa'] },
      { title: 'Director of Photography', people: ['Valdir Furtado', 'Ruben Mendes'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=pGUSpQwBulE',
},
  'tixa_metime': {
    title: 'TIXA - ME TIME' ,
    description: 'Music video for TIXA',
    credits: [
      { title: 'Director', people: ['Valdir Furtado'] },
      { title: 'Director of Photography', people: ['João Nobre'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=JBepWAjUdqY',
  },
  'karlson_parece': {
    title: 'Filipe Karlson - Parece, Parece' ,
    description: 'Music video for Filipe Karlson',
    credits: [
      { title: 'Director', people: ['Tommy Loureiro'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=pcqVH09Zb2w',
  },
  'ricardoribeiro_mare': {
    title: 'Ricardo Ribeiro feat Ana Moura - Maré' ,
    description: 'Music video for Ricardo Ribeiro feat Ana Moura',
    credits: [
      { title: 'Director', people: ['André Caniços'] },
      { title: 'Director of Photography', people: ['Pedro Patrocínio'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=EFcrQtBhBNk',
  },
  'tixa_diferente': {
    title: 'TIXA - DIFERENTE' ,
    description: 'Music video for TIXA',
    credits: [
      { title: 'Director', people: ['Valdir Furtado'] },
      { title: 'Director of Photography', people: ['João Nobre'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=T3l6sassvLE',
  },
  'naomy_atendeotelefone': {
    title: 'Naomy Vissolela - Atende o Telefone' ,
    description: 'Music video for Naomy Vissolela',
    credits: [
      { title: 'Director', people: ['Elison Bartolomeu'] },
      { title: 'Director of Photography', people: ['Insónia.Tv'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=YHqg879gngU',
  },
  'richie_london': {
    title: 'Richie Campbell live in London' ,
    description: 'Richie Campbell concert in Electric Brixton, London',
    credits: [
      { title: 'Director', people: ['Gerssis David'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=uBcH9kmxCF0',
  },
  
  
}

function getProjectImages(slug: string) {
  // Get the folder name from projectFolders mapping
  const folderName = projectFolders[slug];
  
  if (!folderName) {
    return [];
  }

  // Define the number of images for each project based on the folder structure
  const imageCounts: { [key: string]: number } = {
    'ana-moura': 12,
    'vsp': 9,
    'sharkskin': 15,
    'richie': 12,
    'nenny': 9,
    'murta-jura': 12,
    'logo-photo': 3,
    'hodierno': 12,
    'capital-bulgaria': 9,
    'blaya': 12,
    '7777angels': 12,
    'rossk_whatufeeling': 6,
    'ricardoribeiro_masorte': 9,
    'aurora_pinto': 9,
    'pedro_mafama_milesimo': 9,
    'napa_vanzee': 9,
    'sotaques': 9,
    'lucy_val': 6,
    'mishlawi': 6,
    'tixa_acordar': 12,
    'tixa_metime': 6,
    'ricardoribeiro_mare': 9,
    'karlson_parece': 9,
    'tixa_diferente': 9,
    'naomy_atendeotelefone': 9,
    'richie_london': 9,
  };

  const count = imageCounts[slug] || 0;
  const images: string[] = [];

  // Generate image paths based on the folder name and count
  for (let i = 1; i <= count; i++) {
    images.push(`/${folderName}/${i}.jpg`);
  }

  return images;
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]
  const images = getProjectImages(params.slug)

  // Carousel state
  const [carouselOpen, setCarouselOpen] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Close carousel function
  const closeCarousel = () => {
    setCarouselOpen(false);
    setCarouselIndex(0);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Open carousel function
  const openCarousel = (index: number) => {
    setCarouselIndex(index);
    setCarouselOpen(true);
    // Disable body scrolling when carousel is open
    document.body.style.overflow = 'hidden';
  };
  
  const prevImage = () => setCarouselIndex((i) => (i - 1 + images.length) % images.length)
  const nextImage = () => setCarouselIndex((i) => (i + 1) % images.length)

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselOpen) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeCarousel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [carouselOpen]);

  if (!project) {
    return (
      <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 smooth-gradient opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_40%)]"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-gradient">Project not found</h1>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
            Return to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Carousel Modal */}
      {carouselOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
          <button
            className="absolute top-8 right-8 text-white text-3xl font-light opacity-70 hover:opacity-100 hover:scale-110 transition-all z-50"
            onClick={closeCarousel}
            aria-label="Close carousel"
          >
            &times;
          </button>
          <div 
            className="relative flex items-center justify-center w-full" 
            style={{ minHeight: '60vh' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Previous Image Preview - Hidden on small screens */}
            {images.length > 1 && (
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer opacity-60 hover:opacity-90 transition-opacity z-40 hidden md:block"
                style={{ width: '12vw', height: '60%', maxWidth: '200px', minWidth: '100px' }}
                onClick={prevImage}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={images[(carouselIndex - 1 + images.length) % images.length]}
                    alt="Previous preview"
                    fill
                    className="object-cover rounded-none"
                    style={{ filter: 'blur(1px) brightness(0.7)' }}
                    loading="eager"
                  />
                </div>
              </div>
            )}
            
            
            {/* Main Image with Clickable Sides */}
            <div className="bg-black p-0 md:p-6 rounded-none shadow-2xl flex items-center justify-center relative" style={{ maxWidth: '100vw', maxHeight: '100vh' }}>
              {/* Left Clickable Area */}
              {images.length > 1 && (
                <div 
                  className="absolute left-0 top-0 w-1/3 h-full cursor-pointer z-30"
                  onClick={prevImage}
                  aria-label="Previous image"
                />
              )}
              
              {/* Right Clickable Area */}
              {images.length > 1 && (
                <div 
                  className="absolute right-0 top-0 w-1/3 h-full cursor-pointer z-30"
                  onClick={nextImage}
                  aria-label="Next image"
                />
              )}
              
              <div className="relative w-[100vw] h-[100vh] md:w-[90vw] md:h-[60vw] max-w-[1507px] max-h-[80vh] flex items-center justify-center">
                <Image
                  src={images[carouselIndex]}
                  alt={project.title + ' still ' + (carouselIndex + 1)}
                  fill
                  className="object-contain shadow-xl"
                  priority
                  loading="eager"
                />
              </div>
            </div>
            
            {/* Next Image Preview - Hidden on small screens */}
            {images.length > 1 && (
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer opacity-60 hover:opacity-90 transition-opacity z-40 hidden md:block"
                style={{ width: '12vw', height: '60%', maxWidth: '200px', minWidth: '100px' }}
                onClick={nextImage}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={images[(carouselIndex + 1) % images.length]}
                    alt="Next preview"
                    fill
                    className="object-cover rounded-none"
                    style={{ filter: 'blur(1px) brightness(0.7)' }}
                    loading="eager"
                  />
                </div>
              </div>
            )}
            
          </div>
                     {/* Pagination and Dots */}
           <div className="flex flex-col items-center mt-2 mb-2 z-50">
             {/* Image Counter */}
             <div className="text-white text-xs sm:text-sm md:text-base lg:text-base font-medium mb-2" style={{ fontFamily: 'Manrope' }}>
               {carouselIndex + 1} / {images.length}
             </div>
             
             {/* Dots */}
             <div className="relative flex justify-center items-center" style={{ width: `${images.length * 8 - 2}px`, height: '6px' }}>
               {images.map((_, idx) => (
                 <button
                   key={idx}
                   className="absolute rounded-full"
                   style={{
                     width: '6px',
                     height: '6px',
                     left: `${idx * 8.18}px`,
                     background: '#D9D9D9',
                     opacity: carouselIndex === idx ? 1 : 0.41,
                     transition: 'opacity 0.2s',
                     border: 'none',
                     outline: 'none',
                     cursor: 'pointer',
                     padding: 0,
                   }}
                   onClick={() => setCarouselIndex(idx)}
                   aria-label={`Go to image ${idx + 1}`}
                 />
               ))}
             </div>
           </div>
        </div>
      )}
      {/* Background Pattern */}
      <div className="absolute inset-0 smooth-gradient opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_40%)]"></div>
      </div>

      {/* Logo */}
      <div className="fixed top-9 left-9 z-20 mix-blend-difference">
        <Link href="/">
          <Image 
            src="/logo/logowhite.png" 
            alt="Tomás Mateus Logo" 
            width={330} 
            height={90}
            className="hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>

      {/* Fixed Sidebar Navigation - Hidden on mobile */}
      <div className="hidden md:flex fixed top-0 right-0 h-full flex-col items-end justify-center pr-9 z-40 select-none mix-blend-difference">
        <div className="text-right space-y-1">
          {/* WORK button */}
          <Link
            href="/"
            className="block transition-all duration-500 ease-out focus:outline-none hover:scale-110 cursor-pointer"
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


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 pb-16">
        {/* Main Video/Image with Play Button */}
        {project.videoUrl && project.videoUrl.trim() !== '' ? (
          <div className="relative w-full max-w-4xl aspect-video mx-auto mb-16">
            <iframe
              src={project.videoUrl.replace('watch?v=', 'embed/')}
              title={project.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}

        {/* Title & Credits */}
        <div className="text-center mb-16 mx-auto px-4">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl text-white font-medium font-[Manrope] mb-16"
          >
            {project.title}
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl text-white font-normal font-[Manrope] flex flex-col justify-center items-center space-y-4">
            {project.credits.map((credit, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-gray-300 font-medium mb-1">{credit.title}</span>
                <div className="flex flex-wrap justify-center gap-x-2">
                  {credit.people.map((person, personIndex) => (
                    <span key={personIndex} className="text-white">
                      {person}{personIndex < credit.people.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        {images.length > 1 && (
          <div className="w-screen mb-16 overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-screen">
              {images.slice(0).map((img, i) => (
                <div key={i} className="relative w-full aspect-video overflow-hidden group cursor-pointer" onClick={() => openCarousel(i)}>
                  <Image 
                    src={img} 
                    alt={project.title + ' still ' + (i+2)} 
                    fill 
                    className="object-cover transition-all duration-1000 ease-out group-hover:scale-105" 
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
       <footer className="w-full text-center text-xs sm:text-sm md:text-base lg:text-base" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Manrope', fontWeight: 400, height: '35px', lineHeight: '35px' }}>
         © 2025 Tomás Mateus. All rights reserved
       </footer>
    </div>
  )
} 