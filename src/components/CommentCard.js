import React from 'react';

import '../css/CommentCard.css';

import Tilt from 'react-vanilla-tilt';

export default function CommentCard(props) {
    const { properties, options } = props;
    return (
        <Tilt options={options}>
            <div className="container-comment-card">
                <div className="box">
                    <div className="img-bx">
                        <img src={properties.image} alt="backpacker" />
                    </div>
                    <div className="content-bx">
                        <h2>Title Box Hover Effect</h2>
                        <p>lblablalb jjfkd jdklajf jdkalf </p>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}