import React from 'react'
import Contact from './Component/Contact/Contact'
import Header from './Component/Header/header'
import Hero from './Component/Hero/hero'
import About from './Component/About/About'
import Projects from './Component/Project/Projects'
import Technologies from './Component/Technologies/Technologies'
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  )
}
