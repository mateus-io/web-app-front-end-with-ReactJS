import React from 'react';
import '../css/AnimationButton.css';

export default function AnimationButton(props){
    return (
        <>
            <button className="button-animation">{props.value}</button>
        </>
    );
}