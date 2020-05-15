import React from 'react';

import '../css/AwesomeSlider.css';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import backpacker1 from '../assets/images/backpacker1.jpg';
import backpacker2 from '../assets/images/backpacker2.jpg';
import backpacker3 from '../assets/images/backpacker3.jpg';

export default function slider() {
    return (
        <>
        <div className="slider-awesome">
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
                <div data-src={backpacker1} />
                <div data-src={backpacker2} />
                <div data-src={backpacker3} />
            </AwesomeSlider>
            </div>
        </>
    );
} 