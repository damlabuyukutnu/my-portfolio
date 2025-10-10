import React from "react";
import Card from "./Card";
import { Typewriter } from "react-simple-typewriter";

const Home = () => (
    <section id="home" style={sectionStyle} >
        <Card
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        >
            <h1 style={{ color: "#fff", fontSize: "2.5rem" }}>
                <Typewriter
                    words={["Welcome to My Portfolio!", "Hoş geldin!"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                />
            </h1>
            <p style={{ color: "#ccc", fontSize: "1.2rem" }}>
                Hi! I'm <span style={{ color: "#59117d" }}>Damla Nur Büyükütnü</span>, a frontend developer.
            </p>
        </Card>

    </section>
);

const sectionStyle = {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000000",

};

export default Home;
