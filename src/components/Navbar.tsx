import { useState, useEffect, useCallback } from 'react'

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'technologies', label: 'Tecnologías' },
  { id: 'contact', label: 'Contacto' },
]

export const Navbar = () => {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${scrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'}
      `}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        

        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`
                relative font-subtitle text-sm tracking-wide
                transition-colors duration-300
                ${active === id ? 'text-white' : 'text-white/50 hover:text-white/80'}
              `}
            >
              {label}
              {active === id && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 translate-y-[-3.5px]' : ''}`} />
        </button>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-400
          ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
          bg-black/60 backdrop-blur-xl border-t border-white/10
        `}
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`
              block w-full text-left px-6 py-3.5 font-subtitle text-sm tracking-wide
              transition-colors duration-300
              ${active === id ? 'text-white bg-white/5' : 'text-white/50 hover:text-white/80 hover:bg-white/5'}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
