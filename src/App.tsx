import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './screen/HeroSection'
import { AboutUs } from './screen/AboutUs'
import { Projects } from './screen/ProjectsSection'
import { Footer } from './screen/Footer'
import { ContactUs } from './screen/ContactUs'

function App() {

  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <AboutUs />
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