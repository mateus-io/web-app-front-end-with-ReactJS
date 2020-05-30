import React from 'react';

import '../css/MenuInterativo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//handling with routes without refresh
import { Link } from 'react-router-dom';

export default function MenuInterativo() {

    const rotationAnimation = () => {
        let items = document.getElementsByClassName("items");
        for (let i = 0; i < items.length; i++)
            items[i].style.display = "block";
        items[3].style.animation = "close 2s";
        items[0].style.animation = "first 2s";
        items[1].style.animation = "second 2s";
        items[2].style.animation = "third 2s";
        window.setTimeout(() => {
            items[3].innerHTML = `<p>Close</p>`;
            items[0].innerHTML = `<p>Home</p>`;
            items[1].innerHTML = `<p>Buy</p>`;
            items[2].innerHTML = `<p>About</p>`;
        }, 700);
    }
    const animationRetrieve = () => {
        let items = document.getElementsByClassName("items");
        for (let i = 0; i < items.length; i++)
            items[i].innerHTML = " ";
        items[3].style.animation = "close-return 2s";
        items[0].style.animation = "first-return 2s";
        items[1].style.animation = "second-return 2s";
        items[2].style.animation = "third-return 2s";
        window.setTimeout(() => {
            for (let i = 0; i < items.length; i++)
                items[i].style.display = "none";
        }, 700);
    }
    return (
        <header className="menu-interativo">
            <nav>
                <ul>
                    <li onMouseOver={rotationAnimation} className="menu">
                        <p><FontAwesomeIcon icon="home" /></p>
                    </li>
                    <Link to="/" >
                        <li data-text="Home" className="items first"></li>
                    </Link>
                    <Link to="/buy">
                        <li data-text="Buy" className="items"></li>
                    </Link>
                    <Link to="/about" >
                        <li data-text="About" className="items last"></li>
                    </Link>
                    
                    <li onClick={animationRetrieve} className="items close"></li>
                </ul>
            </nav>
        </header>
    );
}