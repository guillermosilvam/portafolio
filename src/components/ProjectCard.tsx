import React from 'react';
import { ImageCarousel } from './ImageCarousel';
import { FiGithub } from 'react-icons/fi'; // o tu icono de GitHub

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  title,
  description,
  tags,
  githubLink,
}) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-colors">
      <ImageCarousel images={images} className="w-full h-48 md:h-56" />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-title text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm text-white/70 font-body leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 self-start inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 text-sm hover:bg-white/20 transition"
        >
          <FiGithub className="w-4 h-4" />
          Ver código
        </a>
      </div>
    </div>
);

