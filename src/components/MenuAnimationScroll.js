import React from 'react';

import SearchInput from './SearchInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoImg from '../assets/images/logo.png';

import '../css/header.css';

//handling with routes without refresh
import { Link } from 'react-router-dom';



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
                    <Link className="flex-link" to="/">
                        <li className="escuro">
                            <p><FontAwesomeIcon icon="home" /></p>
                        </li>
                    </Link>
                    <Link className="flex-link" to="/buy">
                        <li className="claro">
                            <p><FontAwesomeIcon icon="cart-plus" /></p>
                        </li>
                    </Link>
                    <Link className="flex-link" to="/about">
                        <li className="escuro">
                            <p><FontAwesomeIcon icon="book-reader" /></p>
                        </li>
                    </Link>
                    <Link className="flex-link" to="*">
                        <li className="claro">
                            <p><FontAwesomeIcon icon="phone-alt" /></p>
                        </li>
                    </Link>
                </ul>
            </nav>
            <img src={logoImg} alt="logo"></img>
            <SearchInput value="search" />

            {window.addEventListener('scroll', ScrollAnimation)}
        </header>
    );
}