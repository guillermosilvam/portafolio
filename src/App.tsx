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
    images: ['/img1.jpg', '/img2.jpg'],
    title: 'E-commerce Full Stack',
    description: 'Tienda online completa con carrito, pagos y panel admin.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    githubLink: 'https://github.com/tuusuario/ecommerce',
  },
  {
    images: ['/img3.jpg', '/img4.jpg'],
    title: 'Task Manager',
    description: 'App de tareas con autenticación y arrastrar y soltar.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    githubLink: 'https://github.com/tuusuario/taskmanager',
  },
  // más proyectos...
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
     // { path: '/', element: <Portafolio /> },
    ]
  }
]) 