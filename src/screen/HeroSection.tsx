import TextType from '../../@/components/TextType'
import { CodeWindow } from '../components/CodeWindow'
import DotField from '../../@/components/DotField'

export const Hero = () => (
    <section id='hero' className='relative w-full min-h-screen overflow-hidden flex flex-col justify-center bg-black'
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
        <div className='relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center text-white gap-2 md:gap-10 px-6 md:px-8 py-16 md:py-0'>
            <div className='flex flex-col items-center md:items-start justify-center w-full md:w-3/5'>
                <h1 className='font-title text-4xl md:text-5xl lg:text-7xl font-normal tracking-wider text-center md:text-left'>Guillermo Silva</h1>
                <div className='h-14 md:h-12 mt-3 w-full'>
                    <TextType 
                        text={['Desarrollador Web Full Stack', 'Apasionado por la tecnología', 'Creador de experiencias digitales']}
                        className='font-subtitle text-base md:text-2xl lg:text-4xl font-light tracking-wider text-center md:text-left'
                        cursorCharacter='_'
                        pauseDuration={2000}
                    />
                </div>
                <div className='flex flex-row justify-center md:flex-row gap-2 md:gap-4 mt-6 md:mt-10 w-full md:w-auto'>
                    <button 
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="
                      bg-white 
                      text-black font-medium text-xs
                      rounded-full px-5 py-2
                      md:text-lg md:px-10 md:py-3
                      hover:bg-gray-200 hover:shadow-inner
                      transition-all duration-300
                    ">Ver Proyectos</button>
                    <button className="
                      bg-white/10 backdrop-blur-md border border-white/20
                      text-white font-medium text-xs
                      rounded-full px-5 py-2
                      md:text-lg md:px-10 md:py-3
                      hover:bg-white/20 hover:border-white/30
                      transition-all duration-300
                    "><a href="https://drive.google.com/file/d/1dsFU79gmpUzmU6AxytijTUqqW82R3sz4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Visualizar CV</a></button>
                </div>
            </div>
            <div className="w-full md:w-2/5 flex items-center justify-center mt-14 md:mt-0">
                <CodeWindow />
            </div>
        </div>
    </section>
)
