import Image from 'next/image'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  director: string
  production: string
  dop: string
  images: string[]
}

const projects: Project[] = [
  {
    title: 'Ana Moura - Desliza',
    description: 'Music video for Ana Moura\'s single "Desliza"',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/ana-moura.png'
    ]
  },
  {
    title: 'VSP',
    description: 'Music video for VSP',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/vsp.png'
    ]
  },
  {
    title: 'Sharkskin',
    description: 'Music video for Sharkskin',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/sharkskin.png'
    ]
  },
  {
    title: 'Richie',
    description: 'Music video for Richie',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/richie.png'
    ]
  },
  {
    title: 'Nenny',
    description: 'Music video for Nenny',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/nenny.png'
    ]
  },
  {
    title: 'Murta x Jura',
    description: 'Music video for Murta x Jura',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/murta-jura.png'
    ]
  },
  {
    title: 'Logo Photo',
    description: 'Photography work',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/logo-photo.png'
    ]
  },
  {
    title: 'Hodierno',
    description: 'Music video for Hodierno',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/hodierno.png'
    ]
  },
  {
    title: 'Capital Bulgaria',
    description: 'Music video for Capital Bulgaria',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/capital-bulgaria.png'
    ]
  },
  {
    title: 'Blaya',
    description: 'Music video for Blaya',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/blaya.png'
    ]
  },
  {
    title: '7777 Angels',
    description: 'Music video for 7777 Angels',
    director: 'André Canicos',
    production: 'One House Only',
    dop: 'Bernardo Infante',
    images: [
      '/portfolio/7777angels.png'
    ]
  }
]

export default function Work() {
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

      {/* Page Header */}
      <div className="relative z-10 pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-gradient">
            Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A selection of music videos and films I've worked on as a colorist.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {projects.map((project, index) => (
          <section key={index} className="mb-32 last:mb-16 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - Main Image`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-light text-white">{project.title}</h2>
                  <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Director</h3>
                    <p className="text-white text-lg">{project.director}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Production</h3>
                    <p className="text-white text-lg">{project.production}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Director of Photography</h3>
                    <p className="text-white text-lg">{project.dop}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
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