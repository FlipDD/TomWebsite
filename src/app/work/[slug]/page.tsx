'use client'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import { useState, useEffect } from 'react'

const projectFolders: { [key: string]: string } = {
  'ana-moura': 'ANA MOURA',
  'vsp': 'VSP',
  'sharkskin': 'SHARKSKIN',
  'richie': 'RICHIE',
  'nenny': 'NENNY',
  'murta-jura': 'MURTA X JURA',
  'logo-photo': 'LOGO_PHOTO',
  'hodierno': 'HODIERNO',
  'capital-bulgaria': 'CAPITAL_BULGARIA',
  'blaya': 'BLAYA',
  '7777angels': '7777ANGELS',
  'aurora': 'AURORA',
  'lucyval': 'LUCYVAL',
  'mafama': 'MAFAMA',
  'mishlawi': 'MISHLAWI',
  'napa': 'NAPA',
  'ricardo-ribeiro': 'RICARDO RIBEIRO',
  'rossk': 'ROSSK',
  'sotaques': 'SOTAQUES',
  'tixa-acordar': 'TIXA ACORDAR',
  'tixa-metime': 'TIXA METIME',
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
      { title: 'Production', people: ['One House Only'] },
      { title: 'Director of Photography', people: ['Pedro Patrocínio'] },
    ],
    videoUrl: 'https://www.youtube.com/watch?v=Xty4iPW1rZI',
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
      { title: 'Director', people: ['André Canicos'] },
      { title: 'Production', people: ['One House Only'] },
      { title: 'Director of Photography', people: ['Bernardo Infante'] },
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
}

function getProjectImages(slug: string) {
  // Return images for each project based on the folder structure
  const projectImages: { [key: string]: string[] } = {
    'ana-moura': [
      '/ANA MOURA/Screenshot 2025-03-04 at 16.02.27.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.12.00.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.06.48.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.03.05.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.07.13.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.02.44.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.04.00.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.05.59.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.03.25.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.02.53.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.12.18.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.12.56.png',
      '/ANA MOURA/Screenshot 2025-03-04 at 16.12.45.png',
    ],
    'vsp': [
      '/VSP/Screenshot 2025-03-05 at 15.01.01.png',
      '/VSP/Screenshot 2025-03-05 at 15.01.18.png',
      '/VSP/Screenshot 2025-03-05 at 15.01.48.png',
      '/VSP/Screenshot 2025-03-05 at 15.09.30.png',
      '/VSP/Screenshot 2025-03-05 at 15.09.59.png',
      '/VSP/Screenshot 2025-03-05 at 15.10.19.png',
      '/VSP/Screenshot 2025-03-05 at 15.10.50.png',
      '/VSP/Screenshot 2025-03-05 at 15.11.28.png',
      '/VSP/Screenshot 2025-03-05 at 15.11.46.png',
      '/VSP/Screenshot 2025-03-05 at 15.12.03.png',
      '/VSP/Screenshot 2025-03-05 at 15.12.28.png',
      '/VSP/Screenshot 2025-03-05 at 15.13.00.png',
      '/VSP/Screenshot 2025-03-05 at 15.13.13.png',
      '/VSP/Screenshot 2025-03-05 at 15.13.50.png',
    ],
    'richie': [
      '/RICHIE/Screenshot 2025-03-05 at 14.41.16.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.41.32.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.41.55.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.42.09.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.42.23.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.42.38.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.43.07.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.43.27.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.43.47.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.44.07.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.44.22.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.44.46.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.44.59.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.45.12.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.45.34.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.45.56.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.46.15.png',
      '/RICHIE/Screenshot 2025-03-05 at 14.46.29.png',
    ],
    'nenny': [
      '/NENNY/Screenshot 2025-03-05 at 14.28.42.png',
      '/NENNY/Screenshot 2025-03-05 at 14.29.14.png',
      '/NENNY/Screenshot 2025-03-05 at 14.29.48.png',
      '/NENNY/Screenshot 2025-03-05 at 14.30.38.png',
      '/NENNY/Screenshot 2025-03-05 at 14.31.42.png',
      '/NENNY/Screenshot 2025-03-05 at 14.32.03.png',
      '/NENNY/Screenshot 2025-03-05 at 14.32.28.png',
      '/NENNY/Screenshot 2025-03-05 at 14.33.12.png',
      '/NENNY/Screenshot 2025-03-05 at 14.33.41.png',
      '/NENNY/Screenshot 2025-03-05 at 14.34.00.png',
      '/NENNY/Screenshot 2025-03-05 at 14.34.28.png',
      '/NENNY/Screenshot 2025-03-05 at 14.34.49.png',
      '/NENNY/Screenshot 2025-03-05 at 14.35.11.png',
      '/NENNY/Screenshot 2025-03-05 at 14.35.25.png',
    ],
    'murta-jura': [
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.27.08.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.27.34.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.27.53.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.28.22.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.28.46.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.29.13.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.30.02.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.30.27.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.31.00.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.31.17.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.31.52.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.32.19.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.32.45.png',
      '/MURTA X JURA/Screenshot 2025-03-05 at 11.33.21.png',
    ],
    'logo-photo': [
      '/LOGO_PHOTO/Logo Tomás Mateus_Preto.png',
      '/LOGO_PHOTO/Screenshot 2024-04-22 at 19.29.32.png',
      '/LOGO_PHOTO/Screenshot 2024-04-24 at 12.23.03.png',
    ],
    'hodierno': [
      '/HODIERNO/Screenshot 2025-02-07 at 14.52.14.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.53.18.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.53.33.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.54.07.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.54.28.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.55.49.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.56.00.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.56.17.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.56.34.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.57.31.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.57.44.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.58.26.png',
      '/HODIERNO/Screenshot 2025-02-07 at 14.59.42.png',
    ],
    'capital-bulgaria': [
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.04.32.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.04.46.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.05.10.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.06.11-min.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.06.11.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.06.33.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.06.49.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.07.21.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.07.56.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.08.38.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.09.32.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.10.10.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.10.42.png',
      '/CAPITAL_BULGARIA/Screenshot 2025-03-05 at 10.12.11.png',
    ],
    'blaya': [
      '/BLAYA/Screenshot 2025-03-05 at 11.06.17.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.06.49.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.07.40.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.07.57.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.08.23.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.08.58.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.09.40.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.10.21.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.11.13.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.11.47.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.12.59.png',
      '/BLAYA/Screenshot 2025-03-05 at 11.13.35.png',
    ],
    '7777angels': [
      '/7777ANGELS/Screenshot 2025-03-05 at 10.47.56.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.48.19.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.48.36.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.48.57.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.49.27.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.49.41.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.50.24.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.51.04.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.51.28.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.52.06.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.52.19.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.52.49.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.53.20.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.53.52.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.54.30.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.55.08.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.55.22.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.55.38.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.55.52.png',
      '/7777ANGELS/Screenshot 2025-03-05 at 10.56.24.png',
    ],
  };

  return projectImages[slug] || [];
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

  // Cleanup effect to restore body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
            className="relative flex items-center justify-center w-full h-full" 
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
            
            {/* Previous Arrow Button - Only visible on small screens */}
            {images.length > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-40 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 md:hidden"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            
            {/* Main Image */}
            <div className="bg-black p-2 md:p-6 rounded-none shadow-2xl flex items-center justify-center" style={{ maxWidth: '95vw', maxHeight: '90vh' }}>
              <div className="relative w-[90vw] h-[60vw] max-w-[1507px] max-h-[80vh] flex items-center justify-center">
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
            
            {/* Next Arrow Button - Only visible on small screens */}
            {images.length > 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-40 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 md:hidden"
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
          {/* Dots */}
          <div className="relative flex justify-center items-center mt-6 mb-2 z-50" style={{ width: `${images.length * 16 - 4}px`, height: '12px' }}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className="absolute rounded-full"
                style={{
                  width: '12px',
                  height: '12px',
                  left: `${idx * 16.36}px`,
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

      {/* Sidebar Navigation */}
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-9 z-30 mix-blend-difference">
        <div className="text-right space-y-1">
          <Link 
            href="/" 
            className="block transition-all duration-500 ease-out hover:scale-110"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '28px', fontWeight: 650, lineHeight: 'normal', width: 'fit-content', marginLeft: 'auto' }}
          >
            WORK
          </Link>
          <Link 
            href="/contact" 
            className="block transition-all duration-500 ease-out hover:scale-110"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '28px', fontWeight: 650, lineHeight: 'normal', width: 'fit-content', marginLeft: 'auto' }}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 pb-16">
        {/* Main Video/Image with Play Button */}
        {project.videoUrl ? (
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
        ) : images.length > 0 ? (
          <div className="relative w-full max-w-4xl aspect-video mx-auto mb-16">
            <Image 
              src={images[0]} 
              alt={project.title} 
              fill 
              className="object-cover transition-all duration-1000 ease-out hover:scale-105 cursor-pointer"
              priority 
              onClick={() => openCarousel(0)}
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="glass-effect p-4 backdrop-blur-md">
                <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                  <circle cx="60" cy="60" r="60" fill="rgba(0,0,0,0.3)" />
                  <polygon points="50,40 90,60 50,80" fill="#fff" />
                </svg>
              </div>
            </div>
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
              {images.slice(1).map((img, i) => (
                <div key={i} className="relative w-full aspect-video overflow-hidden group cursor-pointer" onClick={() => openCarousel(i + 1)}>
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
      <footer className="w-full text-center" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '20px', fontFamily: 'Manrope', fontWeight: 400, height: '35px', lineHeight: '35px' }}>
        © 2025 Tomás Mateus. All rights reserved
      </footer>
    </div>
  )
} 