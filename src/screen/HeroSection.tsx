import TextType from '../../@/components/TextType'
import { CodeWindow } from '../components/CodeWindow'

export const Hero = () => (
    <section id='hero' className='relative w-full h-screen overflow-hidden'>
        <div className='relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center text-white gap-2 md:gap-10 px-6 md:px-8'>
            <div className='flex flex-col items-center md:items-start justify-center w-full md:w-3/5'>
                <h1 className='font-title text-4xl md:text-5xl lg:text-7xl font-normal tracking-wider text-center md:text-left'>Guillermo Silva</h1>
                <div className='h-14 md:h-12 mt-2.5 w-full'>
                    <TextType 
                        text={['Desarrollador Web Full Stack', 'Apasionado por la tecnología', 'Creador de experiencias digitales']}
                        className='font-subtitle text-base md:text-2xl lg:text-4xl font-light tracking-wider text-center md:text-left'
                        cursorCharacter='_'
                        pauseDuration={2000}
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 mt-6 md:mt-10 text-sm md:text-xl w-full md:w-auto'>
                    <button 
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="
                      bg-white 
                      text-black font-medium
                      rounded-full px-5 md:px-8 py-2.5 md:py-3
                      hover:bg-gray-200 hover:shadow-inner
                      transition-all duration-300
                    ">Ver Proyectos</button>
                    <button className="
                      bg-white/10 backdrop-blur-md border border-white/20
                      text-white font-medium
                      rounded-full px-5 md:px-8 py-2.5 md:py-3
                      hover:bg-white/20 hover:border-white/30
                      transition-all duration-300
                    "><a href="https://drive.google.com/file/d/1dsFU79gmpUzmU6AxytijTUqqW82R3sz4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Visualizar CV</a></button>
                </div>
            </div>
            <div className="w-full md:w-2/5 flex items-center justify-center mt-10 md:mt-0">
                <CodeWindow />
            </div>
        </div>
    </section>
)