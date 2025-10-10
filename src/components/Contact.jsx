import React from "react";
import Card from "./Card";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
    <section id="contact" style={sectionStyle}>
        <Card data-aos="zoom-out-right">
            <h2>Contact</h2>
            <p style={{ color: "#e7d5f0" }}>
                You can reach me at:{" "}
                <a href="mailto:damla.buyukutnu@gmail.com" style={{ color: "#e7d5f0" }}>
                    damla.buyukutnu@gmail.com
                </a>
            </p>
            <div style={iconContainer}>
                <a href="https://www.linkedin.com/in/damlanurbuyukutnu" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/damlabuyukutnu" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <FaGithub />
                </a>
            </div>
        </Card>
    </section>
);

const sectionStyle = {
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000000",
};

const iconContainer = {
    marginTop: "1rem",
    display: "flex",
    gap: "1.5rem",
};

const iconStyle = {
    color: "#e7d5f0",
    fontSize: "2rem",
    transition: "color 0.3s",
};

export default Contact;
