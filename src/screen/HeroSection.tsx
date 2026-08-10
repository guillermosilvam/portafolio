import TextType from '../../@/components/TextType'
import { CodeWindow } from '../components/CodeWindow'
import DotField from '../../@/components/DotField'

export const Hero = () => (
    <section id='hero' className='relative w-full min-h-screen overflow-hidden flex flex-col justify-center bg-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-linear-to-r after:from-transparent after:via-white/25 after:to-transparent'>
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
        <div className='relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center text-white gap-4 md:gap-10 px-4 xs:px-6 md:px-8 py-10 md:py-0'>
            <div className='flex flex-col items-center md:items-start justify-center w-full md:w-3/5'>
                <h1 className='font-title text-4xl xs:text-5xl md:text-5xl lg:text-7xl font-normal tracking-wider text-center md:text-left'>
                    Guillermo Silva
                </h1>
                <div className='mt-4 w-full flex justify-center md:justify-start min-h-15'>
                  <TextType 
                    text={['Desarrollador Web Full Stack', 'Apasionado por la tecnología', 'Creador de experiencias digitales']}
                    className='font-subtitle text-lg sm:text-xl md:text-2xl lg:text-4xl font-light tracking-wider text-center md:text-left leading-relaxed inline-block'
                    cursorCharacter='_'
                    pauseDuration={2000}
                  />
                </div>
                <div className='flex flex-row justify-center md:justify-start gap-2 xs:gap-3 mt-5 w-full'>
                    <button 
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="
                        bg-white text-black font-medium
                        rounded-full
                        text-md px-4 py-2         
                        sm:text-lg sm:px-10 sm:py-3
                        whitespace-nowrap
                        hover:bg-gray-200 hover:shadow-inner
                        transition-all duration-300
                      ">
                      Ver Proyectos
                    </button>

                    <button className="
                        bg-white/10 backdrop-blur-md border border-white/20
                        text-white font-medium
                        rounded-full
                        text-md px-4 py-2
                        sm:text-lg sm:px-10 sm:py-3
                        whitespace-nowrap
                        hover:bg-white/20 hover:border-white/30
                        transition-all duration-300
                      ">
                      <a href="https://drive.google.com/file/d/1fmWtZQcsuM90Y1EmWEGh6gOfOl965hCp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Visualizar CV
                      </a>
                    </button>
                </div>
            </div>
            <div className="flex w-full md:w-2/5 items-center justify-center mt-8 px-3 md:px-0 md:mt-0">
                <CodeWindow />
            </div>
        </div>
    </section>
)