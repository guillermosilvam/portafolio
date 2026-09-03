import DotField from '../../@/components/DotField'
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../../@/components/ui/terminal"
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";

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
        <div className='relative z-10 h-full w-full flex flex-col md:flex-row items-center justify-center text-white gap-4 md:gap-0 px-4 xs:px-6 md:px-30 py-10 md:py-0'>
            <div className='flex flex-1 flex-col items-center md:items-start justify-center w-full md:w-3/5'>
                <h1 className='font-title text-4xl xs:text-5xl md:text-5xl lg:text-7xl font-normal tracking-wider text-center md:text-left'>
                    Guillermo Silva
                </h1>
                <p className='font-subtitle text-lg sm:text-xl md:text-2xl lg:text-4xl font-light tracking-wider text-center md:text-left leading-none inline-block'>Desarrollador Web Full-Stack</p>
                <div className='flex flex-row justify-center md:justify-start gap-4 xs:gap-3 mt-10   w-full'>
                    <button 
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="
                        bg-white text-black font-medium
                        rounded-full
                        text-md px-4 py-2         
                        sm:text-lg sm:px-8 sm:py-3
                        whitespace-nowrap
                        hover:bg-gray-200 hover:shadow-inner
                        transition-all duration-300
                        flex justify-center items-center gap-2
                      ">
                      <TbDeviceDesktopCode />
                      Ver Proyectos
                    </button>

                    <button className="
                        bg-white/10 backdrop-blur-md border border-white/20
                        text-white font-medium
                        rounded-full
                        text-md px-4 py-2
                        sm:text-lg sm:px-8 sm:py-3
                        whitespace-nowrap
                        hover:bg-white/20 hover:border-white/30
                        transition-all duration-300
                      ">
                      <a className='flex justify-center items-center gap-2' href="https://drive.google.com/file/d/1ZTugvYaXz6oOXHaK2hY9rd4qQCXGpdwe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                        Visualizar CV
                      </a>
                    </button>
                </div>
            </div>
            <div className="sm:flex flex-1 w-full items-center justify-end mt-8 px-3 md:px-0 md:mt-0 hidden">
                <Terminal className="font-mono bg-white/10 backdrop-blur-md border-white/20">

                  <TypingAnimation>
                    {``}
                  </TypingAnimation>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#c586c0]">{`const `}</span>
                    <span className="text-[#9cdcfe]">{`guillermo`}</span>
                    <span className="text-[#d4d4d4]">{` = `}</span>
                    <span className="text-[#c586c0]">{`new `}</span>
                    <span className="text-[#4ec9b0]">{`Coder`}</span>
                    <span className="text-[#d4d4d4]">{`(`}</span>
                    <span className="text-[#ce9178]">{`"Guillermo"`}</span>
                    <span className="text-[#d4d4d4]">{`, {`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#9cdcfe]">{`\trole`}</span>
                    <span className="text-[#d4d4d4]">{`: `}</span>
                    <span className="text-[#ce9178]">{`"Fullstack Developer"`}</span>
                    <span className="text-[#d4d4d4]">{`,`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#9cdcfe]">{`\tstack`}</span>
                    <span className="text-[#d4d4d4]">{`: [`}</span>
                    <span className="text-[#ce9178]">{`"React"`}</span>
                    <span className="text-[#d4d4d4]">{`, `}</span>
                    <span className="text-[#ce9178]">{`"TypeScript"`}</span>
                    <span className="text-[#d4d4d4]">{`, `}</span>
                    <span className="text-[#ce9178]">{`"Node.js"`}</span>
                    <span className="text-[#d4d4d4]">{`],`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#9cdcfe]">{`\tlocation`}</span>
                    <span className="text-[#d4d4d4]">{`: `}</span>
                    <span className="text-[#ce9178]">{`"Remote"`}</span>
                    <span className="text-[#d4d4d4]">{`,`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#9cdcfe]">{`\tstatus`}</span>
                    <span className="text-[#d4d4d4]">{`: `}</span>
                    <span className="text-[#ce9178]">{`"available"`}</span>
                  </AnimatedSpan>

                  <TypingAnimation className="text-[#d4d4d4]">{`});`}</TypingAnimation>
                  <TypingAnimation>
                    {` `}
                  </TypingAnimation>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#c586c0]">{`while `}</span>
                    <span className="text-[#d4d4d4]">{`(!`}</span>
                    <span className="text-[#9cdcfe]">{`guillermo`}</span>
                    <span className="text-[#d4d4d4]">{`.`}</span>
                    <span className="text-[#dcdcaa]">{`checklist`}</span>
                    <span className="text-[#d4d4d4]">{`.`}</span>
                    <span className="text-[#dcdcaa]">{`empty`}</span>
                    <span className="text-[#d4d4d4]">{`()) {`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#9cdcfe]">{`\tguillermo`}</span>
                    <span className="text-[#d4d4d4]">{`.`}</span>
                    <span className="text-[#dcdcaa]">{`think`}</span>
                    <span className="text-[#d4d4d4]">{`();`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#c586c0]">{`\tconst `}</span>
                    <span className="text-[#9cdcfe]">{`codebase`}</span>
                    <span className="text-[#d4d4d4]">{` = `}</span>
                    <span className="text-[#9cdcfe]">{`guillermo`}</span>
                    <span className="text-[#d4d4d4]">{`.`}</span>
                    <span className="text-[#dcdcaa]">{`code`}</span>
                    <span className="text-[#d4d4d4]">{`();`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#c586c0]">{`\tif `}</span>
                    <span className="text-[#d4d4d4]">{`(`}</span>
                    <span className="text-[#9cdcfe]">{`codebase`}</span>
                    <span className="text-[#d4d4d4]">{`.`}</span>
                    <span className="text-[#9cdcfe]">{`bugs`}</span>
                    <span className="text-[#d4d4d4]">{` > `}</span>
                    <span className="text-[#b5cea8]">{`0`}</span>
                    <span className="text-[#d4d4d4]">{`) {`}</span>
                  </AnimatedSpan>

                  <AnimatedSpan className="flex flex-wrap">
                    <span className="text-[#9cdcfe]">{`\t\tguillermo`}</span>
                    <span className="text-[#d4d4d4]">{`.`}</span>
                    <span className="text-[#dcdcaa]">{`debug`}</span>
                    <span className="text-[#d4d4d4]">{`();`}</span>
                  </AnimatedSpan>

                  <TypingAnimation className="text-[#d4d4d4]">{`\t}`}</TypingAnimation>
                  <TypingAnimation className="text-[#d4d4d4]">{`}`}</TypingAnimation>

                </Terminal>
            </div>
        </div>
    </section>
)