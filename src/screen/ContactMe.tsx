import { FiMail, FiGithub, FiCopy, FiPhone, FiLinkedin, FiCheck } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotField from '../../@/components/DotField';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const email = 'guillermosilvam2005@gmail.com';
  const github = 'https://github.com/guillermosilvam';
  const linkedIn = 'https://www.linkedin.com/in/guillermo-silva-162392356';
  const contact = '+58 424-3224333';

  const handleCopyText = async (value: string, field: 'email' | 'phone') => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    });

    tl.fromTo(card,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    );

    const items = card.querySelectorAll('.contact-item');
    tl.fromTo(items,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out' },
      '-=0.3'
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="bg-black relative z-10 py-12 md:py-20 px-4 md:px-6 flex justify-center snap-start overflow-hidden"
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
      <div ref={cardRef} className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center max-w-lg w-full shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <h2 className="text-2xl md:text-4xl font-title text-white mb-3 md:mb-4">¡Hablemos!</h2>
        <p className="text-white/60 font-body mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base px-2">
          Si tienes un proyecto en mente, una oportunidad o solo quieres charlar sobre tecnología, estaré encantado de escucharte.
        </p>

        <div className="flex flex-col gap-3 md:gap-4">
          <div className="contact-item flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-5 py-2.5 md:py-3 hover:bg-white/20 transition cursor-pointer">
            <FiMail className="text-red-300 w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <a href={`mailto:${email}`} className="text-white/80 font-mono text-xs md:text-sm flex-1 text-left hover:text-white transition truncate">
              {email}
            </a>
            <button
              type="button"
              onClick={() => handleCopyText(email, 'email')}
              className="inline-flex items-center justify-center w-6 h-6 text-white/60 hover:text-white transition rounded-full"
              title="Copiar correo"
            >
              {copiedField === 'email' ? <FiCheck className="w-4 h-4 text-emerald-300" /> : <FiCopy className="w-4 h-4" />}
            </button>
          </div>
          <div className="contact-item flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-5 py-2.5 md:py-3 hover:bg-white/20 transition cursor-pointer">
            <FiGithub className="text-white w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-white/80 font-mono text-xs md:text-sm truncate flex-1 text-left hover:text-white transition">
              github.com/guillermosilvam
            </a>
          </div>
          <div className="contact-item flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-5 py-2.5 md:py-3 hover:bg-white/20 transition cursor-pointer">
            <FiLinkedin className="text-blue-500 w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-white/80 font-mono text-xs md:text-sm truncate flex-1 text-left hover:text-white transition">
              Perfil de LinkedIn
            </a>
          </div>
          <div className="contact-item flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-5 py-2.5 md:py-3 hover:bg-white/20 transition cursor-pointer">
            <FiPhone className="text-emerald-300 w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="text-white/80 font-mono text-xs md:text-sm flex-1 text-left hover:text-white transition truncate">
              {contact}
            </span>
            <button
              type="button"
              onClick={() => handleCopyText(contact, 'phone')}
              className="inline-flex items-center justify-center w-6 h-6 text-white/60 hover:text-white transition rounded-full"
              title="Copiar Numero de Telefono"
            >
              {copiedField === 'phone' ? <FiCheck className="w-4 h-4 text-emerald-300" /> : <FiCopy className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
