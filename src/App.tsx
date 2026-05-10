import Nav from './components/shared/NavBar/Navbar'
import Footer from './components/shared/Footer/Footer'


import Hero from './components/sections/HeroSection/HeroSection'
import Contact from './components/sections/ContactSection/ContactSection'
//import Stats from './components/sections/StatsSection/StatsSection'
import CardGrid from './components/sections/CardGrid/CardGrid'
import Team from './components/sections/TeamSection/TeamSection'



function App() {
  

  return (
    <>
      <Nav />

      <Hero />
      <CardGrid />


     {/* <Stats /> */}
      <Contact />
      <Team />


      <Footer />

    </>
  )
}

export default App
