import React, { useState } from 'react';

import '../css/GridTable.css'

const GridTable = () => {
    const [cardClass, setCardClass] = useState('card-grid-container');
    return (
        <div className="grid-container-cards">
            <div className="card-wrapper">
                <div className="card-grid-container">
                    <div className="card-grid-content">
                        <span>Test test something</span>
                    </div>
                </div>
                <div className="card-grid-container red">
                    <div className="card-grid-content">
                        <span>Test test something</span>
                    </div>
                </div>
                <div className="card-grid-container gree">
                    <div className="card-grid-content">
                        <span>Test test something</span>
                    </div>
                </div>
                <div className="card-grid-container blue">
                    <div className="card-grid-content">
                        <span>Test test something</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridTable;