import React, { lazy, Suspense, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlay, FiX } from 'react-icons/fi';
import 'yet-another-react-lightbox/styles.css';

const Lightbox = lazy(() => import('./ZoomableLightbox'));

const isVideo = (src: string) => /\.(mp4|webm|ogg)(?:$|[?#])/i.test(src);

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const imageIndices = images.reduce<number[]>((indices, src, index) => {
    if (!isVideo(src)) indices.push(index);
    return indices;
  }, []);
  const videoPoster = images.find((src) => !isVideo(src));

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className="w-full h-48 md:h-56 relative">
        {images.map((src, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              if (isVideo(src)) {
                setVideoOpen(true);
              } else {
                setLightboxOpen(true);
              }
            }}
            disabled={index !== currentIndex}
            aria-label={isVideo(src) ? 'Abrir video en pantalla grande' : `Ampliar imagen ${index + 1}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              index === currentIndex
                ? 'opacity-100 cursor-zoom-in'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            {isVideo(src) ? (
              <>
                {videoPoster ? (
                  <img src={videoPoster} alt="Miniatura del video" className="w-full h-full object-cover" />
                ) : (
                  <span className="block w-full h-full bg-black" />
                )}
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
                  <FiPlay className="w-12 h-12" aria-hidden="true" />
                </span>
              </>
            ) : (
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            )}
          </button>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 backdrop-blur-sm transition hover:scale-110"
            aria-label="Anterior"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 backdrop-blur-sm transition hover:scale-110"
            aria-label="Siguiente"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Suspense fallback={null}>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={Math.max(0, imageIndices.indexOf(currentIndex))}
            slides={imageIndices.map((index) => ({ src: images[index] }))}
            on={{ view: ({ index }) => setCurrentIndex(imageIndices[index]) }}
          />
        </Suspense>
      )}

      {videoOpen && isVideo(images[currentIndex]) && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Reproductor de video"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            aria-label="Cerrar video"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          >
            <FiX className="h-6 w-6" />
          </button>
          <video
            src={images[currentIndex]}
            poster={videoPoster}
            controls
            playsInline
            className="max-h-full max-w-full"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
