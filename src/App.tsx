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

import rickMorty from './assets/interfaz.png'

const PROJECTS_DATA = [
  {
    images: [valtaHome, valtaLogin, valtaRegistro, valtaDashboard, valtaProfessionals, valtaTickets, valtaProfile],
    title: 'Plataforma de Freelancers Valta',
    description: 'Web demo para la gestión de proyectos y tickets de trabajo para freelancers y clientes.',
    tags: ['React', 'Typescript','Django', 'SQLite'],
    githubLink: 'https://github.com/guillermosilvam/Valta-WorkPlatform',
  },
  {
    images: [sigefaInicio, sigefaRegistro, sigefaCreditos, sigefaDetalles, sigefaEstadisticas, sigefaUsuarios],
    title: 'Sistema de Informacion Crediticia',
    description: 'Página completa con registro de empresas, productores y panel admin.',
    tags: ['React', 'Typescript', 'Django', 'PostgreSQL'],
    githubLink: 'https://github.com/guillermosilvam/Credit-information-system',
  },
  {
    images: [phpLogin, phpRegistro, phpListado, phpCrearTren, phpReporte1, phpReporte2],
    title: 'Sistema de Reservaciones de Tren',
    description: 'App de reservaciones de trenes con autenticación por roles y sección de reportes.',
    tags: ['PHP', 'JavaScript','Tailwind', 'MySQL'],
    githubLink: 'https://github.com/guillermosilvam/CRUD-PHP',
  },
  {
    images: [rickMorty],
    title: 'API de Rick y Morty',
    description: 'Practica de consumo de APIs.',
    tags: ['React', 'Tailwind','API'],
    githubLink: 'https://github.com/guillermosilvam/RickAndMorty',
  }
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