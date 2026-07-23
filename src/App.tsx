import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Projects } from './screen/ProjectsSection'
import { Footer } from './screen/Footer'
import { Contact } from './screen/ContactMe'
import { HorizontalScroll } from './components/HorizontalScroll'
import { Technologies } from './screen/Technologies'
import { SectionDivider } from './components/SectionDivider'

const PROJECTS_DATA = [
  {
    images: ['/img1.jpg', '/img2.jpg'],
    title: 'Sistema de Informacion Crediticia',
    description: 'Página completa con registro de empresas, productores y panel admin.',
    tags: ['React', 'Typescript', 'Django', 'PostgreSQL'],
    githubLink: 'https://github.com/guillermosilvam/Credit-information-system',
  },
  {
    images: ['/img3.jpg', '/img4.jpg'],
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
        <SectionDivider />
        <Projects projects={PROJECTS_DATA} />
        <SectionDivider />
        <Technologies />
        <SectionDivider />
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
     // { path: '/', element: <Portafolio /> },
    ]
  }
]) 