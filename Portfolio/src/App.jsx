import React from "react";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/hero";
import About from "./Component/About/About";
import Projects from "./Component/Project/Projects";
import Technologies from "./Component/Technologies/Technologies";
import Contact from "./Component/Contact/Contact";
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
