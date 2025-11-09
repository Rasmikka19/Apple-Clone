import { useState } from 'react'

// files
import Navbar from './components/Navbar'
import Offerbar from './components/Offerbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>  
      <Offerbar></Offerbar>
      <Hero></Hero>
       <Section></Section>
       <Carousel></Carousel>
      <Footer></Footer>
    </>
  )
}

export default App
