import React from 'react';

import SearchInput from './SearchInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoImg from '../assets/images/logo.png';

import '../css/header.css';



export default function MenuAnimationScroll(props) {

    //const [topDistance, setTopDistance] = useState(0);
    //const [stateClass, setStateClass ] = useState(props.state);
    let topDistance = 0;

    const ScrollAnimation = () => {
        const windowTop = window.pageYOffset;
        let menu = document.getElementsByClassName("menu-container")[0];
        if (windowTop !== topDistance) {
            if (windowTop < topDistance && windowTop >= 100) {
                //abrir menu com animação
                menu.classList.add("show-menu");
            }
            else {
                if (windowTop > topDistance && windowTop >= 100) {
                    //descendo com a barra de scroll
                    menu.classList.remove("show-menu");
                    menu.classList.add("hidden-menu");
                } else {
                    menu.classList.remove("show-menu");
                    menu.classList.remove("hidden-menu");
                }
            }
        }
        topDistance = windowTop;
    }

    return (

        <header className="menu-container claro">
            <nav>
                <ul>
                    <li className="escuro"><p><FontAwesomeIcon icon="home" /></p></li>
                    <li className="claro"><p><FontAwesomeIcon icon="cart-plus" /></p></li>
                    <li className="escuro"><p><FontAwesomeIcon icon="book-reader" /></p></li>
                    <li className="claro"><p><FontAwesomeIcon icon="phone-alt" /></p></li>
                </ul>
            </nav>
            <img src={logoImg} alt="logo"></img>
            <SearchInput value="search" />

            {window.addEventListener('scroll', ScrollAnimation)}
        </header>
    );
}