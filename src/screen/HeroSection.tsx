import Grainient from '../../@/components/Grainient'
import styles from './Hero.module.css'
import TextType from '../../@/components/TextType'
import { CodeWindow } from '../components/CodeWindow'

export const Hero = () => (
    <section className='relative w-full h-screen overflow-hidden'>
        <div className='absolute inset-0 z-0'>
            <Grainient
              color1="#868686"
              color2="#0b0814"
              color3="#464548"
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
        <div className='relative z-10 h-full w-full flex flex-row items-center justify-between text-white gap-6 px-8'>
            <div className='flex flex-col items-start justify-center w-3/5'>
                <h1 className={` ${styles.title} text-7xl font-normal tracking-wider`}>Guillermo Silva</h1>
                <TextType 
                    text={['Desarrollador Web Full Stack', 'Apasionado por la tecnología', 'Creador de experiencias digitales']}
                    className={` ${styles.subtitle} text-4xl font-light mt-2.5 tracking-wider`}
                    cursorCharacter='_'
                    pauseDuration={2000}
                />
                <div className='flex gap-4 mt-14  text-xl'>
                    <button className="
                      bg-white 
                      text-black font-medium
                      rounded-full px-8 py-3
                      hover:bg-gray-200 hover:shadow-inner
                      transition-all duration-300
                    ">Ver Proyectos</button>
                    <button className="
                      bg-white/10 backdrop-blur-md border border-white/20
                      text-white font-medium
                      rounded-full px-8 py-3
                      hover:bg-white/20 hover:border-white/30
                      transition-all duration-300
                    ">Visualizar CV</button>
                </div>
            </div>
            <div className="w-2/5 flex items-center justify-center">
                <CodeWindow />
            </div>
        </div>
    </section>
)