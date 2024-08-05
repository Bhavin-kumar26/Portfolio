import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className=" text-white ">
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
