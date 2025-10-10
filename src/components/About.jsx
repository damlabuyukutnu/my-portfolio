import React from "react";
import Card from "./Card";

const About = () => (
    <section id="about" style={sectionStyle}>
        <Card data-aos="zoom-out-right">
            <h2>About Me</h2>
            <p style={{ color: "#e7d5f0" }}>
                Hi! I’m Damla Nur Büyükütnü, a Computer Engineering graduate focusing on frontend development. I design and build modern, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js.

                Through my internships, I gained experience in e-commerce and healthcare informatics, while my Erasmus+ volunteer work helped me strengthen my communication and teamwork skills.

                As a passionate developer who loves learning and creating, my goal is to build web projects that are both valuable for users and visually engaging.            </p>
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