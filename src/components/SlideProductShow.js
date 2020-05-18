import React, { useState } from 'react';

import '../css/AmostraProdutos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Card from './Card';

import { properties } from './Data';

export default function SlideProductShow(props) {
    
    const [index, setIndex] = useState(0);
    const [icon, setIcon] = useState(props.icon);

    const leftAnimation = () => {
        const circle = document.getElementsByClassName("circle")[0];
        const arrow = document.getElementsByClassName("arrows")[0];
        const mainCard = document.getElementsByClassName("main-card")[0];
        const proxCard = document.getElementsByClassName("last-card")[0];
        //const antCard = document.getElementsByClassName("first-card")[0];
        setIcon("undo");
        circle.style.animation = "rotate-left .5s";
        arrow.style.animation = "hand-left .5s";
        mainCard.style.animation = "ant-card .5s";
        proxCard.style.animation = "prox-main .5s";
        //antCard.style.animation = "ant-main .5s";
        window.setTimeout ( () => {
            circle.style.animation = "";
            arrow.style.animation = "";
            mainCard.style.animation = "";
            proxCard.style.animation = "";
            //antCard.style.animation = "";
        }, 500);
        setIndex( (index === 0) ? properties.length - 1 : index - 1  );
    }
    const rightAnimation = () => {
        const circle = document.getElementsByClassName("circle")[0];
        const arrow = document.getElementsByClassName("arrows")[1];
        const mainCard = document.getElementsByClassName("main-card")[0];
        const antCard = document.getElementsByClassName("first-card")[0];
        setIcon("redo"); 
        circle.style.animation = "rotate-right .5s";
        arrow.style.animation = "hand-right .5s";
        mainCard.style.animation = "prox-card .5s";
        antCard.style.animation = "ant-main .5s";
        window.setTimeout ( () => {
            circle.style.animation = "";
            arrow.style.animation = "";
            mainCard.style.animation = "";
            antCard.style.animation = "";
        }, 500);
        setIndex( (index === properties.length - 1) ? 0 : index + 1  );
    }

    return (
        <>
            <section id="amostra-produtos">
                <div>
                    <h1>Products : </h1>
                </div>
                <div className="container">
                    <Card card="first-card" property={properties[( (index - 1) < 0 ) ? properties.length - 1 : index - 1]} />

                    <Card card="main-card" property={properties[index]} />

                    <Card card="last-card" property={properties[( (index + 1) > properties.length - 1 ) ? 0 : index + 1]} />
                </div>
                <div className="button-card-change">
                    <div onClick={ leftAnimation } className="arrows">
                        <i><FontAwesomeIcon icon="hand-point-left" /></i>
                    </div>
                    <div className="circle"> 
                        <i><FontAwesomeIcon icon={icon} /></i>
                    </div>
                    <div onClick={ rightAnimation } className="arrows">
                        <i><FontAwesomeIcon icon="hand-point-right" /></i>
                    </div>
                </div>
            </section>
        </>
    );
}

