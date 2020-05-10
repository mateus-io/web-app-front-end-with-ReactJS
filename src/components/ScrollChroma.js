import React from 'react';
import '../css/scrollBar.css';

export default function ScrollChroma(){
    const progressStart = () => {
        let progress = document.getElementsByClassName('progress-bar')[0];
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = () => {
            let progressHeight = (window.pageYOffset / totalHeight) * 100;
            progress.style.height = progressHeight + "%";
        }
    }
    
    return(
        <>
            <div className="progress-bar"></div>
            <div className="scroll-path"></div>
            {window.addEventListener('load', progressStart)}
        </>
    );
}