import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Logo */}
      <div className="fixed top-2 left-2 z-30 animate-fade-in">
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
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-16 z-30">
        <div className="text-right space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Link 
            href="/portfolio" 
            className="block transition-all duration-300 relative group"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '33px', fontWeight: 800, lineHeight: 'normal' }}
          >
            <span className="relative">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link 
            href="/contact" 
            className="block transition-all duration-300 relative group"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: '33px', fontWeight: 800, lineHeight: 'normal' }}
          >
            <span className="relative">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen pt-32 pb-16 px-4 sm:px-8">
        {/* Images glued to the left or top on mobile */}
        <div className="flex flex-col justify-center items-start min-w-[320px] max-w-[480px] w-full lg:w-[480px] mb-8 lg:mb-0 lg:mr-4">
          <div className="relative w-full lg:w-[480px] max-w-full aspect-[4/5] mb-0 overflow-hidden rounded-lg">
            <Image 
              src="/portfolio/logo-photo.png" 
              alt="Tomás Mateus Self Portrait" 
              fill 
              className="object-cover transition-transform duration-700 ease-out hover:scale-105" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative w-full lg:w-[480px] max-w-full h-[80px] overflow-hidden rounded-lg mt-4">
            <Image 
              src="/logo/lightprofiles.png" 
              alt="Waveform" 
              fill 
              className="object-cover object-bottom transition-transform duration-700 ease-out hover:scale-105" 
            />
          </div>
        </div>
        {/* About and Contact Info centered */}
        <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-8 max-w-2xl animate-fade-in-up mx-auto" style={{ animationDelay: '0.6s' }}>
          <h1 className="text-5xl md:text-6xl font-light mb-8 text-gradient">
            About
          </h1>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300">
            <p>
              My name is <span className="text-white font-medium">Tomás Mateus</span>. I'm a freelance Colorist based in Lisbon, Portugal. With a Bachelor's degree in Cinema from Lusófona University, I specialize in crafting creative looks for music videos and films, focusing on artistic and visually striking projects.
            </p>
            <p>
              I love collaborating with directors and DOPs to bring their vision to life through color, whether it's bold and experimental or subtle and cinematic. I also work remotely, making it easy to team up with clients worldwide.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-light text-white mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <a 
                href="mailto:tomasmateus@gmail.com" 
                className="flex items-center space-x-4 text-lg text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="text-2xl">✉️</span>
                <span className="group-hover:underline">tomasmateus@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/tommmateus" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 text-lg text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="text-2xl">📷</span>
                <span className="group-hover:underline">@tommmateus</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full text-center z-40 bg-black">
        <p className="text-white text-[20px] font-[Manrope] m-0 p-2">
          © 2025 Tomás Mateus. All rights reserved
        </p>
      </footer>
    </div>
  );
} 