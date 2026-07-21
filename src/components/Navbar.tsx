
export const Navbar = () => (
    <nav className="
        bg-transparent 
        border-b border-white/20 
        backdrop-blur-lg
        fixed top-0 left-0 right-0 z-50
        px-6 py-4
        flex items-center justify-between
        text-white
    ">
        <div>
            <ul className="flex gap-6 font-body text-sm">
              {['Inicio', 'Proyectos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative pb-1 hover:text-gray-300 transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
        </div>
       <div className="flex items-center gap-3">
        {/* Botón traducir con barra lateral */}
        <button className={`
          relative overflow-hidden
          bg-white/10 backdrop-blur-sm border border-white/20
          rounded-full px-4 py-1
          text-sm font-body
          hover:bg-white/20
          transition-all duration-300
        `}>
          ES
        </button>
        </div>
    </nav>
);