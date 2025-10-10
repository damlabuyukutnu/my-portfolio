import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import LogoLoop from "./LogoLoop";
import SplashCursor from './SplashCursor'





function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <div className="portfolio-bg">
      <Navbar />
      <main>

        <SplashCursor />
        <Home />
        <LogoLoop />
        <About />
        <Projects />
        <Contact />



      </main>
    </div>
  );
}

export default App;


