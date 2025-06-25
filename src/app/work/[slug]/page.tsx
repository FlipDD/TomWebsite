import Image from 'next/image'
import Link from 'next/link'
import path from 'path'

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
}

const projects: { [key: string]: any } = {
  'ana-moura': {
    title: 'Ana Moura - Desliza',
    description: 'Music video for Ana Moura\'s single "Desliza"',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: 'https://www.youtube.com/watch?v=05SRUBxRbQQ',
  },
  'vsp': {
    title: 'VSP',
    description: 'Music video for VSP',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'sharkskin': {
    title: 'Sharkskin',
    description: 'Music video for Sharkskin',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'richie': {
    title: 'Richie',
    description: 'Music video for Richie',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'nenny': {
    title: 'Nenny',
    description: 'Music video for Nenny',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'murta-jura': {
    title: 'Murta x Jura',
    description: 'Music video for Murta x Jura',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'logo-photo': {
    title: 'Logo Photo',
    description: 'Photography work',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'hodierno': {
    title: 'Hodierno',
    description: 'Music video for Hodierno',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'capital-bulgaria': {
    title: 'Capital Bulgaria',
    description: 'Music video for Capital Bulgaria',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  'blaya': {
    title: 'Blaya',
    description: 'Music video for Blaya',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
  },
  '7777angels': {
    title: '7777 Angels',
    description: 'Music video for 7777 Angels',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    videoUrl: null,
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
    'sharkskin': [
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.38.10.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.39.48.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.40.21.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.40.59.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.43.30.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.44.36.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.45.16.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.47.06.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.48.14.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.48.41.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.48.56.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.49.56.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.50.21.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.51.17.png',
      '/SHARKSKIN/Screenshot 2025-02-06 at 16.51.36.png',
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

  if (!project) {
    return (
      <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 text-center animate-fade-in-up">
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
            className="text-4xl font-light block text-white transition-all duration-300 relative group"
          >
            <span className="relative">
              WORK
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32 pb-16 px-4 md:px-8">
        {/* Main Video/Image with Play Button */}
        {project.videoUrl ? (
          <div className="relative w-full max-w-4xl aspect-video mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <iframe
              src={project.videoUrl.replace('watch?v=', 'embed/')}
              title={project.title}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : images.length > 0 ? (
          <div className="relative w-full max-w-4xl aspect-video mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Image 
              src={images[0]} 
              alt={project.title} 
              fill 
              className="object-cover rounded-lg transition-transform duration-700 ease-out hover:scale-105" 
              priority 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-effect rounded-full p-4 backdrop-blur-md">
                <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                  <circle cx="60" cy="60" r="60" fill="rgba(0,0,0,0.3)" />
                  <polygon points="50,40 90,60 50,80" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
        ) : null}

        {/* Title & Credits */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h1 className="text-5xl md:text-7xl font-light mb-8 text-gradient">{project.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg md:text-xl">
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Director</h3>
              <p className="text-white">{project.director}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Production</h3>
              <p className="text-white">{project.production}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Director of Photography</h3>
              <p className="text-white">{project.dop}</p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        {images.length > 1 && (
          <div className="w-full max-w-7xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg group">
                  <Image 
                    src={img} 
                    alt={project.title + ' still ' + (i+1)} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to Work Link */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Link 
            href="/work" 
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-lg group"
          >
            <span>←</span>
            <span className="group-hover:underline">Back to Work</span>
          </Link>
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
  )
} 