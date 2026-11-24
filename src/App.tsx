import { createHashRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './screen/HeroSection'
import { AboutMe } from './screen/AboutMe'
import { Projects } from './screen/ProjectsSection'
import { Footer } from './screen/Footer'
import { Contact } from './screen/ContactMe'
import { Technologies } from './screen/Technologies'

import sigefaInicio from './assets/inicio.webp'
import sigefaRegistro from './assets/registro.webp'
import sigefaCreditos from './assets/creditos.webp'
import sigefaDetalles from './assets/detalles.webp'
import sigefaEstadisticas from './assets/estadisticas.webp'
import sigefaUsuarios from './assets/usuarios.webp'

import phpLogin from './assets/login.webp'
import phpRegistro from './assets/php-registro.webp'
import phpListado from './assets/listado.webp'
import phpCrearTren from './assets/crear-tren.webp'
import phpReporte1 from './assets/reporte1.webp'
import phpReporte2 from './assets/reporte2.webp'

import valtaHome from './assets/valta-home.webp'
import valtaLogin from './assets/valta-login.webp'
import valtaRegistro from './assets/valta-register.webp'
import valtaDashboard from './assets/valta-dashboard.webp'
import valtaProfessionals from './assets/valta-professionals.webp'
import valtaTickets from './assets/valta-tickets.webp'
import valtaProfile from './assets/valta-profile.webp'

import scrapping1 from './assets/scrapping-1.webp'
import scrapping2 from './assets/scrapping-2.webp'
import diagrama from './assets/diagrama.webp'


const PROJECTS_DATA = [
  {
    images: [scrapping1, scrapping2, diagrama],
    title: 'Scraper de Datos de Vehículos',
    description: 'Scraper en Python que recorre páginas de anuncios de vehículos, extrae y normaliza los datos a JSON y los guarda en PostgreSQL para consultarlos.',
    tags: ["Python", "BeautifulSoup", "Web Scraping", "PostgreSQL", "JSON"],
    githubLink: 'https://github.com/guillermosilvam/scraping-test-1',
  },
  {
    images: [sigefaInicio, sigefaRegistro, sigefaCreditos, sigefaDetalles, sigefaEstadisticas, sigefaUsuarios],
    title: 'Sistema de Informacion Crediticia',
    description: 'Sistema para registrar empresas y productores, gestionar créditos y consultar estadísticas desde un panel administrativo.',
    tags: ['React', 'Typescript', 'Django', 'PostgreSQL'],
    githubLink: 'https://github.com/guillermosilvam/Credit-information-system',
  },
  {
    images: [valtaHome, valtaLogin, valtaRegistro, valtaDashboard, valtaProfessionals, valtaTickets, valtaProfile],
    title: 'Plataforma de Freelancers Valta',
    description: 'Plataforma para que freelancers y clientes organicen proyectos y den seguimiento a solicitudes mediante tickets, con perfiles profesionales y un panel de gestión. (Demo)',
    tags: ['React', 'Typescript','Django', 'SQLite'],
    githubLink: 'https://github.com/guillermosilvam/Valta-WorkPlatform',
  },
  {
    images: [phpLogin, phpRegistro, phpListado, phpCrearTren, phpReporte1, phpReporte2],
    title: 'Sistema de Reservaciones de Tren',
    description: 'Aplicación de reservaciones ferroviarias con autenticación por roles, gestión de trenes y una sección de reportes.',
    tags: ['PHP', 'JavaScript','Tailwind', 'MySQL'],
    githubLink: 'https://github.com/guillermosilvam/CRUD-PHP',
  },

];

function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects projects={PROJECTS_DATA} />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
    ]
  }
]) 