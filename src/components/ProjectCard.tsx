import { useState } from 'react';

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
}

export const ProjectCard = ({ images, title, description, tags, githubLink }: ProjectCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {images.length > 0 && (
        <div>
          <button onClick={goToPrevious} aria-label="Imagen anterior">
            &lt;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
          <button onClick={goToNext} aria-label="Imagen siguiente">
            &gt;
          </button>
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  );
};
