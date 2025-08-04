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
      <div className="fixed top-9 left-9 z-30 animate-fade-in mix-blend-difference">
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
        <div className="text-right space-y-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Link 
            href="/portfolio" 
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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen pt-16 pb-16 px-4 sm:px-8">
        {/* Images glued to the left or top on mobile */}
        <div className="flex flex-col justify-center items-start min-w-[373px] max-w-[560px] w-full lg:w-[560px] mb-8 lg:mb-0 lg:mr-4">
          <div
            style={{
              width: '609.139px',
              height: '603.36px',
              flexShrink: 0,
              aspectRatio: '676.82 / 670.40',
              background: 'url("/portfolio/logo-photo.png") lightgray 50% / cover no-repeat',
              borderRadius: 0,
            }}
            aria-label="Tomás Mateus Self Portrait"
          />
          <div
            style={{
              width: '609.139px',
              height: '152.573px',
              flexShrink: 0,
              aspectRatio: '676.82 / 169.53',
              background: 'url("/logo/lightprofiles.png") lightgray 50% / cover no-repeat',
              borderRadius: 0,
              marginTop: '16px',
            }}
            aria-label="Waveform"
          />
        </div>
        {/* About and Contact Info centered */}
        <div className="flex-1 flex flex-col justify-center items-start px-2 sm:px-8 max-w-2xl animate-fade-in-up mx-auto -mt-8" style={{ animationDelay: '0.6s' }}>
          <div
            style={{
              width: '603.2px',
              height: '360.8px',
              flexShrink: 0,
              color: '#FFF',
              fontFamily: 'Manrope',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 'normal',
            }}
          >
            My name is Tomás Mateus I’m a freelance Colorist based in Lisbon, Portugal, with a Bachelor’s degree 
            in Cinema from Lusófona University.<br/><br/>
            My work as a colorist includes collaborations with 
            some of the most prominent names in the 
            portuguese music scene. <br/><br/>
            Recently, thanks to my experience in the industry, taking on the role of director for a few music videos 
            has also come naturally.
          </div>
          <div className="mt-12 space-y-6">
            <div style={{ width: '511.2px', flexShrink: 0 }}>
              <a 
                href="mailto:tomasmateus@gmail.com" 
                style={{ display: 'block', height: '30.4px', color: '#FFF', textDecoration: 'none', fontFamily: 'Manrope', fontSize: '24px', fontWeight: 300, fontStyle: 'normal', lineHeight: 'normal' }}
              >
                tomasmateus@gmail.com
              </a>
              <a 
                href="https://instagram.com/tommmateus" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'block', height: '30.4px', color: '#FFF', textDecoration: 'none', fontFamily: 'Manrope', fontSize: '24px', fontWeight: 300, fontStyle: 'normal', lineHeight: 'normal' }}
              >
                @tommmateus
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