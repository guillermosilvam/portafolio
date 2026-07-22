import styles from './Hero.module.css'
import { 
  SiReact, SiTypescript, SiTailwindcss, SiPython, SiDjango,
  SiPostgresql, SiGit, SiVercel, SiRender
} from 'react-icons/si';


const technologies = [
  { icon: SiReact, name: 'React', color: 'text-cyan-400' },
  { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },
  { icon: SiTailwindcss, name: 'Tailwind', color: 'text-sky-400' },
  { icon: SiPython, name: 'Python', color: 'text-yellow-400' },
  { icon: SiDjango, name: 'Django', color: 'text-emerald-500' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-300' },
  { icon: SiGit, name: 'Git', color: 'text-orange-400' },
  { icon: SiVercel, name: 'Vercel', color: 'text-white' },
  { icon: SiRender, name: 'Render', color: 'text-indigo-400' },
];

export const Technologies = () => (
  <section id="technologies" className="bg-black relative z-10 py-20 px-6">
    <h2 className={`text-3xl md:text-4xl text-white text-center mb-10 tracking-tight`}>
      Tecnologías que uso
    </h2>
    <div className=" flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
      {technologies.map(({ icon: Icon, name, color }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 w-24 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
        >
          <Icon className={`w-8 h-8 ${color}`} />
          <span className={` ${styles.subtitle} text-xs text-white/60 font-mono`} >{name}</span>
        </div>
      ))}
    </div>
  </section>
);
