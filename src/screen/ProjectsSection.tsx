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
        start: 'top bottom',
        end: 'top center',
        scrub: 1.5,
      },
    });

    tl.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .fromTo(
        grid.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
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
      className="w-full min-h-screen relative z-10 py-20 px-6 md:px-12 bg-black overflow-hidden"
    >
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#aeaeae"
          gradientTo="#2d2a2a"
          glowColor="#353434"
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