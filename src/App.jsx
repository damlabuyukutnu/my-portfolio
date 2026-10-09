import React, { useEffect, useState } from "react";
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
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <div className="portfolio-bg">
      {isActive && (<Navbar />)}
      <main>

        <div className="flex flex-center">
          <button onClick={() => setIsActive(!isActive)}>hide navbar</button>

        </div>
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


