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
      <div className="fixed top-8 left-8 z-30 animate-fade-in">
        <Link href="/">
          <Image 
            src="/logo/logowhite.png" 
            alt="Tomás Mateus Logo" 
            width={220} 
            height={60}
            className="hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-16 z-30">
        <div className="text-right space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Link 
            href="/work" 
            className="text-4xl font-light block hover:text-white transition-all duration-300 relative group"
          >
            <span className="relative">
              WORK
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link 
            href="/contact" 
            className="text-3xl font-light block hover:text-white transition-all duration-300 relative group"
          >
            <span className="relative">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen pt-32 pb-16 px-8">
        {/* Left: Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mb-12 lg:mb-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-[480px] max-w-full aspect-[4/5] mb-0 overflow-hidden rounded-lg">
            <Image 
              src="/portfolio/logo-photo.png" 
              alt="Tomás Mateus Self Portrait" 
              fill 
              className="object-cover transition-transform duration-700 ease-out hover:scale-105" 
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative w-[480px] max-w-full h-[80px] overflow-hidden rounded-lg mt-4">
            <Image 
              src="/portfolio/logo-photo.png" 
              alt="Waveform" 
              fill 
              className="object-cover object-bottom transition-transform duration-700 ease-out hover:scale-105" 
            />
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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
      <footer className="relative z-10 text-center py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-lg mb-4">
            Freelance Colorist • Lisbon, Portugal
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Tomás Mateus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 