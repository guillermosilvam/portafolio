import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Projects } from './screen/ProjectsSection'
import { Footer } from './screen/Footer'
import { ContactUs } from './screen/ContactMe'
import { HorizontalScroll } from './components/HorizontalScroll'

function App() {

  return (
    <div>
      <header>
        <Navbar />
        <HorizontalScroll />
      </header>
      <main>
        <Projects />
        <ContactUs />
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