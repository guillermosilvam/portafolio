import PillNav from '../../@/components/PillNav'
import logo from '../assets/plus-solid-full.svg'

export const Navbar = () => (
        <div className="
            fixed top-0 left-0 right-0 z-50 flex justify-center
        ">
            <PillNav
                logo={logo}
                logoAlt="Logo"
                items={[
                  { label: 'Inicio', href: '/' },
                  { label: 'Sobre Mi', href: '/about' },
                  { label: 'Proyectos', href: '/projects' },
                  { label: 'Contacto', href: '/contact' }
                ]}
                activeHref="/"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#ffffff"
                pillColor="#000000"
                hoveredPillTextColor="#000000"
                pillTextColor="#ffffff"
                initialLoadAnimation
            />
        </div>
)