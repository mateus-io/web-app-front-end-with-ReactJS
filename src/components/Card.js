import React from 'react';

export default function Card(props) {
    return (
        <div className={`container-card ${props.card}`}>
            <div className="img-bx">
                <img src={props.property.image} alt="mochila" />
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
    );
}