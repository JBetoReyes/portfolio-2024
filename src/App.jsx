import Header from './components/Header'
import Hero from './components/Hero'
import MacHeader from './components/MacHeader'
import About from './components/About'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <main>
        <MacHeader />
        <Hero />
        <About />
        <Expertise />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
