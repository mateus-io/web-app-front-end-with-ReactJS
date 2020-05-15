import React from 'react';

import '../css/CurveContainer.css';

import mobile from '../assets/images/cellphone.png';

export default function CurveContainer() {
    return (
        <section className="container-curve">
            <img src={mobile} alt="cellphone" />
            <div className="content">
                <h2>Great Website is Awesome</h2>
                <p>BLa blalbla bjkaljkdlj jdklajf akldjasçlf alfjdkl aljfdlka jaskdljf kajdfkl a afjdklsaçjflkja afdsklfjalçkç  akljdfklj k  k k akljfd asj kjakldjf.</p>
            </div>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="white" fill-opacity="1" d="M0,32L30,42.7C60,53,120,75,180,74.7C240,75,300,53,360,48C420,43,480,53,540,85.3C600,117,660,171,720,181.3C780,192,840,160,900,170.7C960,181,1020,235,1080,245.3C1140,256,1200,224,1260,197.3C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </section>
    );
}