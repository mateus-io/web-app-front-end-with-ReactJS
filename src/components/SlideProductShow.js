import React, { useState, useEffect } from 'react';

import '../css/AmostraProdutos.css';

import mochila1 from '../assets/images/mochila1.png';

export default function SlideProductShow() {
    const vetor = ["teste1", "teste2", "teste3", "teste4", "teste5", "teste6"];

    const [firstCard, setFirstCard] = useState(vetor[0]);
    const [secondCard, setSecondCard] = useState(vetor[1]);
    const [thirdCard, setThirdCard] = useState(vetor[2]);

    useEffect(() => {

    });

    return (
        <>
            <section id="amostra-produtos">
                <div>

                </div>
                <div className="container">
                    <div className="container-card">
                        <div className="img-bx">
                            <img src={mochila1} alt="mochila" />
                        </div>
                        <div className="content-bx">
                            <div className="title-card">
                                <h2>Backpack</h2>
                            </div>
                            <div className="color-options">
                                <h3>Colors : </h3>
                                <div className="colors">
                                </div>
                                <div className="colors">
                                </div>
                                <div className="colors">
                                </div>
                                <div className="colors">
                                </div>
                            </div>
                            <div className="size">
                                <h3>Size :</h3>
                                <div className="lengths">
                                    <span>M</span>
                                </div>
                                <div className="lengths">
                                    <span>G</span>
                                </div>
                            </div>
                            <div className="button-submit">
                                <button>Buy now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

