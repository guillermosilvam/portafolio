import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Projects } from './screen/ProjectsSection'
import { Footer } from './screen/Footer'
import { Contact } from './screen/ContactMe'
import { HorizontalScroll } from './components/HorizontalScroll'
import { Technologies } from './screen/Technologies'

const PROJECTS_DATA = [
  {
    images: ['src/assets/sigefa/inicio.webp', 'src/assets/sigefa/registro.webp', 'src/assets/sigefa/creditos.webp', 'src/assets/sigefa/detalles.webp', 'src/assets/sigefa/estadisticas.webp', 'src/assets/sigefa/usuarios.webp'],
    title: 'Sistema de Informacion Crediticia',
    description: 'Página completa con registro de empresas, productores y panel admin.',
    tags: ['React', 'Typescript', 'Django', 'PostgreSQL'],
    githubLink: 'https://github.com/guillermosilvam/Credit-information-system',
  },
  {
    images: ['src/assets/php-crud/login.webp', 'src/assets/php-crud/php-registro.webp', 'src/assets/php-crud/listado.webp', 'src/assets/php-crud/crear-tren.webp', 'src/assets/php-crud/reporte1.webp', 'src/assets/php-crud/reporte2.webp' ],
    title: 'Sistema de Reservaciones de Tren',
    description: 'App de reservaciones de trenes con autenticación por roles y sección de reportes.',
    tags: ['PHP', 'JavaScript','Tailwind', 'MySQL'],
    githubLink: 'https://github.com/guillermosilvam/CRUD-PHP',
  },
];

function App() {

  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar />
        <HorizontalScroll />
      </header>
      <main>
        <Projects projects={PROJECTS_DATA} />
        <Technologies />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    ]
  }
]) 