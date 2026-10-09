import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
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
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <div className="portfolio-bg">
      {isActive && (<Navbar />)}
      <main>

        <div className="navbar-toggle-wrap">
          <button
            type="button"
            className="navbar-toggle-btn"
            onClick={() => setIsActive(!isActive)}
            aria-label={isActive ? "Navbarı gizle" : "Navbarı göster"}
            title={isActive ? "Navbarı gizle" : "Navbarı göster"}
          >
            {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
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


