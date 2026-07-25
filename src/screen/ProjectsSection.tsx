import React, { useRef, useEffect } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import DotField from '../../@/components/DotField';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  images: string[];
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
}

interface ProjectSectionProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectSectionProps> = ({ projects }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const section = sectionRef.current;
  const bg = backgroundRef.current;
  const title = titleRef.current;
  const grid = gridRef.current;
  if (!section || !bg || !title || !grid) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
      toggleActions: 'play reverse play reverse',
    },
  });

  tl.fromTo(bg,
    { opacity: 0, scale: 1.15 },
    { opacity: 1, scale: 1, duration: 0.8, ease: 'power4.out' }
  );

  tl.fromTo(title,
    { y: -60, opacity: 0, filter: 'blur(10px)' },
    { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6, ease: 'back.out(1.8)' },
    '-=0.5'
  );

  tl.fromTo(grid.children,
    { y: 100, opacity: 0, rotateX: 20, scale: 0.8 },
    { y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 0.6, stagger: { each: 0.12, ease: 'back.out(1.7)' } },
    '-=0.4'
  );

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full min-h-screen relative z-10 py-20 px-6 md:px-12 bg-black overflow-hidden snap-start"
      style={{ borderBottom: '1px solid transparent', borderImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent) 1' }}
    >
      <div ref={backgroundRef} className="absolute inset-0 z-0">
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
        className="relative z-10 text-4xl md:text-5xl font-title text-white mb-12 text-center tracking-tight"
      >
        Mis Proyectos
      </h2>

      <div
        ref={gridRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};