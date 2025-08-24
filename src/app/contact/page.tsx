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
      <div className="fixed top-4 sm:top-9 left-4 sm:left-9 z-30 mix-blend-difference">
        <Link href="/">
          <Image 
            src="/logo/logowhite.png" 
            alt="Tomás Mateus Logo" 
            width={330} 
            height={90}
            className="w-48 sm:w-auto hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <div className="fixed top-0 right-0 h-full flex flex-col items-end justify-center pr-4 sm:pr-9 z-30 mix-blend-difference">
        <div className="text-right space-y-1">
          <Link 
            href="/portfolio" 
            className="block transition-all duration-500 ease-out hover:scale-110"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 650, lineHeight: 'normal', width: 'fit-content', marginLeft: 'auto' }}
          >
            WORK
          </Link>
          <Link 
            href="/contact" 
            className="block transition-all duration-500 ease-out hover:scale-110"
            style={{ color: '#FFF', fontFamily: 'Manrope', fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 650, lineHeight: 'normal', width: 'fit-content', marginLeft: 'auto' }}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20 sm:pt-16 pb-20 sm:pb-16 px-4 sm:px-8">
        {/* Images Section - Responsive sizing */}
        <div className="flex flex-col justify-center items-center lg:items-start w-full max-w-[560px] mb-8 lg:mb-0 lg:mr-8">
          {/* Self Portrait - Responsive sizing */}
          <div className="relative w-full max-w-[609px] aspect-[676.82/670.40] mb-4">
            <Image
              src="/portfolio/logo-photo.png"
              alt="Tomás Mateus Self Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Waveform - Responsive sizing */}
          <div className="relative w-full max-w-[609px] aspect-[676.82/169.53]">
            <Image
              src="/logo/lightprofiles.png"
              alt="Waveform"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* About and Contact Info - Responsive text and layout */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-2 sm:px-8 max-w-2xl mx-auto lg:mx-0">
          {/* About Text */}
          <div className="text-center lg:text-left mb-8 lg:mb-12">
            <p className="text-white font-[Manrope] text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-[600px]">
              My name is Tomás Mateus. I'm a freelance Colorist based in Lisbon, Portugal, with a Bachelor's degree 
              in Cinema from Lusófona University.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4 sm:space-y-2 text-center lg:text-left">
            <div>
              <a 
                href="mailto:tomasmateus@gmail.com" 
                className="block text-white text-lg sm:text-xl lg:text-2xl font-light font-[Manrope] hover:opacity-80 transition-opacity duration-300"
              >
                tomasmateus@gmail.com
              </a>
            </div>
            <div>
              <a 
                href="https://instagram.com/tommmateus" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-white text-lg sm:text-xl lg:text-2xl font-light font-[Manrope] hover:opacity-80 transition-opacity duration-300"
              >
                @tommmateus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full text-center z-40 bg-black/50 backdrop-blur-sm">
        <p className="text-white text-base sm:text-lg lg:text-xl font-[Manrope] m-0 p-3 sm:p-4">
          © 2025 Tomás Mateus. All rights reserved
        </p>
      </footer>
    </div>
  );
} 