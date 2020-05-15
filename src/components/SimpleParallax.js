import React from 'react';

import '../css/SimpleParallax.css';


import backpacker3 from '../assets/images/background.jpg';


import mochila2 from '../assets/images/mochila3.png';

export default function SimpleParallax() {
    const parallax = () => {
        let bg = document.getElementById("background");
        let mochila = document.getElementById("mochila2");
        
        let text = document.getElementById("text");

        const value = window.scrollY;

        bg.style.top = value * 0.5 + "px";
        mochila.style.left = value * 0.5 + "px";
        mochila.style.transform = `rotate(${value/10}deg)`;
        
        text.style.top = value * 1 + "px";
    }
    return (
        <section className="parallax-container">
            <img src={backpacker3} id="background" alt="background"/>
            <img src={mochila2} id="mochila2" alt="background"/>
            <h2 id="text">Art Minas</h2> 
            {window.addEventListener('scroll', parallax)}
        </section>
    );
}