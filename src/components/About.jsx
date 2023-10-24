//I have implimented here, How loop works in jsx 
import React from 'react';

const About = () => {
    const menuItem = ['Header', 'Hero', 'Footer', 'Project', 'Service', 'About']
    return (
        <div>
            <section>
                <h2>About out Web application</h2>
                <h3>Our Mission</h3>
                <p>We are dedicated to providing users with a seamless and efficient way to manage their personal finances.</p> 
            </section>
            
            {/* Example Using Array.map() for loop inside jsx */}
            <ul>
                {menuItem.map((item, index) => {
                return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default About;