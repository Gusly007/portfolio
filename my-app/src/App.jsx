
import './App.css'
import MainLayout from './layouts/MainLayout'
import { Projects } from './components/Projects'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  )
}

export default App
