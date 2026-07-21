// src/components/HorizontalScroll.tsx
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hero } from '../screen/HeroSection'
import { AboutMe } from '../screen/AboutMe'
import Grainient from '../../@/components/Grainient'

gsap.registerPlugin(ScrollTrigger)

export const HorizontalScroll = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=300%',   // necesitas scrollear 3 veces la altura de la ventana → va más lento
          scrub: 2,        // retardo de 2 segundos → inercia muy suave, como flotando
          pin: true,
        },
      });

      tl.to(container, {
        x: '-100vw',
        ease: 'power2.out', // aceleración suave al inicio, desaceleración al final
      });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div className="absolute inset-0 z-0" style={{ width: '200vw' }}>
        <Grainient
          color1="#000000"
          color2="#464646"
          color3="#232323"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Contenedor flexible de las dos secciones */}
      <div
        ref={containerRef}
        className="relative z-10 flex h-full"
        style={{ width: '200vw' }}
      >
        <div className="w-screen h-full shrink-0">
          <Hero />
        </div>
        <div className="w-screen h-full shrink-0">
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
