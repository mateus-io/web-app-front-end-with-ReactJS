import React from 'react';

import '../css/CloudAnimation.css';

import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud3.png';
import cloud4 from '../assets/images/cloud4.png';
import cloud5 from '../assets/images/cloud5.png';

export default function ClouAnimation() {
    return (
        <div className="banner"> 
            <h1>Art Minas</h1>
            <div className="clouds">
                <img src={cloud1} alt="cloud1"/>
                <img src={cloud2} alt="cloud2"/>
                <img src={cloud3} alt="cloud3"/>
                <img src={cloud4} alt="cloud4"/>
                <img src={cloud5} alt="cloud5"/>
            </div>
        </div>
    );
}