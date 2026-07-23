import pfp1 from '../assets/pfp1.webp'

export const AboutMe = () => (
    <section id="about" className="relative z-10 h-full flex items-center justify-center text-white px-8 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        <div className="flex-1 space-y-6">
            <span className='text-sm font-title text-white/60 tracking-widest uppercase'>
            Sobre mí
          </span>
          <h2 className='text-4xl md:text-5xl font-title font-light leading-tight'>
            Ingeniero de sistemas. Curioso por naturaleza.
          </h2>
          <p className='text-lg font-subtitle text-white/80 leading-relaxed max-w-xl'>
            Soy Guillermo Silva, ingeniero de sistemas recién graduado. Me apasiona el desarrollo de software, 
            tanto en el frontend como en el backend. Disfruto construir aplicaciones completas, desde la lógica 
            hasta la interfaz, y siempre estoy aprendiendo por mi cuenta para mejorar mis habilidades.
            Creo en el código limpio, en los detalles y en la constancia para crecer profesionalmente.
          </p>
          <p className='text-sm font-subtitle italic text-white/60 max-w-md border-l border-white/30 pl-4'>
            "El hombre que mueve montañas empieza apartando piedras pequeñas"
          </p>
        </div>

        <div className="shrink-0 relative">
          <div className="
            w-64 h-64 md:w-80 md:h-80 rounded-full 
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