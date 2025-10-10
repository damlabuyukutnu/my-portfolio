import React from "react";
import MagicBento from '../MagicBento'
const Projects = () => (
    <section id="projects" style={{ backgroundColor: '#000' }}>


        <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
        />
    </section>
);


export default Projects;