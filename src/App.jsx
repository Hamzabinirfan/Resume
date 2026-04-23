import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Stats from "./components/Stats"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import EducationPublications from "./components/EducationPublications"
import Contact from "./components/Contact"
import ScrollProgress from "./components/ScrollProgress"

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <EducationPublications />
        <Contact />
      </main>
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/5">
        <p>© 2025 Hamza Ansari · Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
