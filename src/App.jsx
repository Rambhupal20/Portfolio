import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import About from './Components/About'
import Project from './Components/Project'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home"><Body /></section>
      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  )
}

export default App
