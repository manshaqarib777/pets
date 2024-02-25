import About from '../components/About'
import Blog from '../components/Blog'
import Breeds from '../components/Breeds'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Shop from '../components/Shop'

function Home() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Breeds />
      <Services />
      <Shop />
      <Blog />
      <Footer />
    </>
  )
}

export default Home
