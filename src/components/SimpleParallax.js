import React from 'react';

import '../css/SimpleParallax.css';

import prateleira from '../assets/images/prateleira.png';

import background from '../assets/images/background.jpg';


import mochila2 from '../assets/images/mochila3.png';
export default function SimpleParallax() {
    const parallax = () => {
        let bg = document.getElementById("background");
        let mochila2 = document.getElementById("mochila2");
        let prateleira = document.getElementById("prateleira");
        let text = document.getElementById("text");

        const value = window.scrollY;

        bg.style.top = value * 0.5 + "px";
        mochila2.style.left = value * 0.5 + "px";
        mochila2.style.transform = `rotate(${value/10}deg)`;
        prateleira.style.top = value * 0.5 + "px";
        text.style.top = value * 1 + "px";
    }
    return (
        <section className="parallax-container">
            <img src={background} id="background" alt="background"/>
            <img src={mochila2} id="mochila2" alt="background"/>
            <img src={prateleira} id="prateleira" alt="background"/>
            <h2 id="text">Art Minas</h2> 
            {window.addEventListener('scroll', parallax)}
        </section>
    );
}