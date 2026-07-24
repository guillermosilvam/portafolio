import { FiMail, FiGithub, FiCopy, FiPhone, FiLinkedin, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import DotField from '../../@/components/DotField';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const email = 'guillermosilvam2005@gmail.com';
  const github = 'https://github.com/guillermosilvam';
  const linkedIn = 'https://www.linkedin.com/in/guillermo-silva-162392356';
  const contact = '+58 424-3224333';

  const handleCopyText = async (value: string, field: 'email' | 'phone') => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="bg-black relative z-10 py-20 px-6 flex justify-center snap-start overflow-hidden"
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
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-lg w-full shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <h2 className="text-3xl md:text-4xl font-title text-white mb-4">Hablemos</h2>
        <p className="text-white/60 font-body mb-8 max-w-md mx-auto">
          Si tienes un proyecto en mente, una oportunidad o solo quieres charlar sobre tecnología, estaré encantado de escucharte.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3">
            <FiMail className="text-red-300 w-5 h-5" />
            <a href={`mailto:${email}`} className="text-white/80 font-mono text-sm flex-1 text-left hover:text-white transition">
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
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 hover:bg-white/20 transition"
          >
            <FiGithub className="text-white w-5 h-5" />
            <span className="text-white/80 font-mono text-sm">github.com/guillermosilvam</span>
          </a>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 hover:bg-white/20 transition"
          >
            <FiLinkedin className="text-blue-500 w-5 h-5" />
            <span className="text-white/80 font-mono text-sm">Perfil de LinkedIn</span>
          </a>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3">
            <FiPhone className="text-emerald-300 w-5 h-5" />
            <span className="text-white/80 font-mono text-sm flex-1 text-left hover:text-white transition">
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
