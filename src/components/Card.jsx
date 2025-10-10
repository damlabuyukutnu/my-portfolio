import React from "react";

const Card = ({ children, delay = 0, ...props }) => {
    return (
        <div
            className="portfolio-card"
            data-aos-delay={delay * 100}
            {...props} // artık tüm AOS propsları geçiyor
        >
            {children}
        </div>
    );
};



export default Card;