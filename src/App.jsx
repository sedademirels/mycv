import React from "react"
import './App.css'
import Navbar from './pages/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import Experience from "./pages/Experience/Experience"
import Project from "./pages/Projects/Project"
import Skills from "./pages/Skills/Skills"
import Footer from "./pages/Footer/Footer"


function App() {

  return (
   <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <About/>
    <Experience/>
    <Project/>
    <Skills/>
    <Footer/>
   </div>
  )
}

export default App
