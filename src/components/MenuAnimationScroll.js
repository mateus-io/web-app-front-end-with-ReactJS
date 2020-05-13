import React, { useState } from 'react';

import SearchInput from './SearchInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoImg from '../assets/images/logo.png';



export default function MenuAnimationScroll(props) {

    const [topDistance, setTopDistance] = useState(0);
    const [stateClass, setStateClass ] = useState(props.state);

    const ScrollAnimation = () => {
        const windowTop = window.pageYOffset;
        let header = document.getElementsByClassName("show-menu")[0];
        if(windowTop < topDistance && windowTop >= 100 && stateClass !== "show-menu"){
             //abrir menu com animação
            setStateClass("show-menu");
            
            header.addEventListener('mouseover', () => {
                header.classList.add("open-menu");
            });
        }
        else{
            if(windowTop > topDistance && windowTop >= 100 && stateClass !== "hidden-menu"){
                //descendo com a barra de scroll
                setStateClass("hidden-menu");
            }
            else if(windowTop < 100){
                setStateClass("claro");
            }
        }
        if(windowTop % 100 === 0)
            setTopDistance(windowTop);
    }

    return (

        <header className={stateClass}>
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

            { window.addEventListener('scroll', ScrollAnimation ) }
        </header>
    );
}