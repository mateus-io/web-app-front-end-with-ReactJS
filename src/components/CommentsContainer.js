import React from 'react';
import CommentCard from '../components/CommentCard';

import '../css/CommentsContainer.css';

import backpacker1 from '../assets/images/backpacker1.jpg';
import backpacker2 from '../assets/images/backpacker2.jpg';
import backpacker3 from '../assets/images/backpacker3.jpg';
import backpacker4 from '../assets/images/background1.jpg';

export default function CommentsContainer () {
    const options = {
        scale: 2,
        speed: 2000,
        max: 25,
        "max-glare" : 1
    };
    return (
        <div className="comments-container">
            <CommentCard options={ options } properties= { { "image" : backpacker1 } }/>
            <CommentCard options={ options } properties= { { "image" : backpacker2 } }/>
            <CommentCard options={ options } properties= { { "image" : backpacker3 } }/>
            <CommentCard options={ options } properties= { { "image" : backpacker4 } }/>
        </div>
    );
}