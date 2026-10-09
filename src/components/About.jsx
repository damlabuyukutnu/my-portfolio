import React from "react";
import Card from "./Card";

const About = () => (
    <section id="about" style={sectionStyle}>
        <Card data-aos="zoom-out-right">
            <h2>About Me</h2>
            <p style={{ color: "#e7d5f0" }}>
                Hi! I’m Damla Nur Büyükütnü, a Computer Engineering graduate focusing on frontend development. I build modern, responsive, and user-friendly web interfaces using HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and React.js. I also work with Redux Toolkit, REST APIs, and UI libraries to create interactive web applications. Through my internships, I gained experience in e-commerce and healthcare informatics, while my personal projects have helped me improve my frontend development skills and problem-solving abilities. My Erasmus+ volunteer experience also strengthened my communication and teamwork skills. I enjoy learning new technologies and building web applications that combine functionality with a clean and engaging user experience.
            </p>
        </Card>
    </section>
);

const sectionStyle = {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000000",
};


export default About;