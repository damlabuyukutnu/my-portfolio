import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Damla Nur Büyükütnü</div>


            {isMobile && (
                <button
                    style={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            )}


            <ul
                style={{
                    ...styles.navLinks,
                    ...(isMobile
                        ? {
                            display: isOpen ? "flex" : "none",
                            position: "absolute",
                            top: "70px",
                            left: 0,
                            right: 0,
                            background: "rgb(6,0,16)",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "1rem 0",
                            gap: "1.5rem",
                            boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
                        }
                        : {}),
                }}
            >
                <li><a href="#home" style={styles.link}>Home</a></li>
                <li><a href="#about" style={styles.link}>About</a></li>
                <li><a href="#projects" style={styles.link}>Projects</a></li>
                <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2.5rem",
        background: "rgb(6,0,16)",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 12px #0008",
    },
    logo: {
        fontFamily: "'Roboto Slab Italic'",
        fontWeight: 400,
        fontStyle: "italic",
        fontSize: "1.8rem",
        letterSpacing: "1px",
    },

    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "2rem",
        margin: 0,
        padding: 0,
        transition: "all 0.3s ease",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.1rem",
        transition: "color 0.2s",
    },
    hamburger: {
        background: "none",
        border: "none",
        color: "#fff",
        fontSize: "2rem",
        cursor: "pointer",
    },
};

export default Navbar;
