import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pfp1 from '../assets/pfp1.webp'
import DotField from '../../@/components/DotField'

gsap.registerPlugin(ScrollTrigger)

export const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const photo = photoRef.current
    if (!section || !text || !photo) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    })

    tl.fromTo(text,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    )

    tl.fromTo(photo,
      { x: 80, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative z-10 min-h-screen flex items-center justify-center text-white px-6 md:px-20 py-16 md:py-0 overflow-hidden bg-black"
      style={{ borderBottom: '1px solid transparent', borderImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent) 1' }}>
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={50}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={true}
          waveAmplitude={10}
          cursorRadius={400}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#404040"
          gradientTo="#404040"
          glowColor="#3e3e3e"
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full max-w-6xl">
        <div ref={textRef} className="flex-1 space-y-3 md:space-y-6 text-center md:text-left">
            <span className='text-[10px] md:text-sm font-title text-white/60 tracking-widest uppercase'>
            Sobre mí
          </span>
          <h2 className='text-xl md:text-4xl lg:text-5xl font-title font-light leading-tight'>
            Ingeniero de sistemas.
          </h2>
          <p className='text-xs md:text-lg font-subtitle text-white/80 leading-relaxed max-w-xl mx-auto md:mx-0'>
            Soy Guillermo Silva, ingeniero de sistemas recién graduado. Me apasiona el desarrollo de software, 
            tanto en el frontend como en el backend. Disfruto construir aplicaciones completas, desde la lógica 
            hasta la interfaz, y siempre estoy aprendiendo por mi cuenta para mejorar mis habilidades.
            Creo en el código limpio, en los detalles y en la constancia para crecer profesionalmente.
          </p>
          <p className='text-xs md:text-sm font-subtitle italic text-white/60 max-w-md border-l border-white/30 pl-4 mx-auto md:mx-0'>
            "El hombre que mueve montañas empieza apartando piedras pequeñas"
          </p>
        </div>

        <div ref={photoRef} className="shrink-0 relative">
          <div className="
            w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 rounded-full 
            bg-white/5 backdrop-blur-xl border border-white/20 
            shadow-[0_0_30px_rgba(255,255,255,0.1)] 
            flex items-center justify-center p-1
          ">
            <div className="w-full h-full rounded-full bg-linear-to-b from-white/10 to-transparent overflow-hidden">
              <img
                src={pfp1}
                alt="Guillermo Silva"
                className="w-full h-full object-cover rounded-full scale-95 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-emerald-400/10 via-transparent to-blue-400/10 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}
