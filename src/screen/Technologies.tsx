import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DotField from "../../@/components/DotField";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiRender,
  SiPhp,
  SiMysql,
  SiExpress,
  SiSupabase,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { icon: SiReact, name: "React", color: "text-cyan-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
  { icon: SiPython, name: "Python", color: "text-yellow-400" },
  { icon: SiDjango, name: "Django", color: "text-emerald-700" },
  { icon: FaNodeJs, name: "NodeJS", color: "text-emerald-500" },
  { icon: SiExpress, name: "Express", color: "text-white" },
  { icon: SiPhp, name: "PHP", color: "text-purple-400" },
  { icon: SiMysql, name: "MySQL", color: "text-orange-400" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-300" },
  { icon: SiGit, name: "Git", color: "text-orange-400" },
  { icon: SiVercel, name: "Vercel", color: "text-white" },
  { icon: SiRender, name: "Render", color: "text-indigo-400" },
  { icon: SiSupabase, name: "Supabase", color: "text-emerald-400" },
];

const topRow = technologies.slice(0, 5);
const bottomRow = technologies.slice(5);

export const Technologies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    if (!section || !title || !topRow || !bottomRow) return;

    const topItems = topRow.querySelectorAll(".tech-item");
    const bottomItems = bottomRow.querySelectorAll(".tech-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      title,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
    );

    tl.fromTo(
      topItems,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform",
      },
      "-=0.2",
    );

    tl.fromTo(
      bottomItems,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform",
      },
      "-=0.4",
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="technologies"
      className="bg-black relative z-10 py-10 md:py-20 px-4 md:px-6 snap-start min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ borderBottom: '1px solid transparent', borderImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent) 1' }}
    >
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
      <h2
        ref={titleRef}
        className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-title text-white text-center mb-6 md:mb-10"
      >
        Tecnologías que uso
      </h2>
      <p className="relative z-10 text-center text-white/50 font-body max-w-xl mx-auto mb-6 md:mb-10 text-sm md:text-base px-2">
        Herramientas y lenguajes con los que he construido proyectos reales.
      </p>
      <div className="relative z-10 flex flex-col gap-4 md:gap-6 max-w-3xl mx-auto">
        <div ref={topRowRef} className="flex flex-wrap justify-center gap-3 md:gap-6">
          {topRow.map(({ icon: Icon, name, color }) => (
            <div
              key={name}
              className="tech-item flex flex-col items-center gap-1.5 md:gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg md:rounded-xl p-2.5 md:p-4 w-16 md:w-24 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <Icon className={`w-6 h-6 md:w-8 md:h-8 ${color}`} />
              <span className="text-[10px] md:text-xs text-white/60 font-mono">{name}</span>
            </div>
          ))}
        </div>
        <div ref={bottomRowRef} className="flex flex-wrap justify-center gap-3 md:gap-6">
          {bottomRow.map(({ icon: Icon, name, color }) => (
            <div
              key={name}
              className="tech-item flex flex-col items-center gap-1.5 md:gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg md:rounded-xl p-2.5 md:p-4 w-16 md:w-24 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <Icon className={`w-6 h-6 md:w-8 md:h-8 ${color}`} />
              <span className="text-[10px] md:text-xs text-white/60 font-mono">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
