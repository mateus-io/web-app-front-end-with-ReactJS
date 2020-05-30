import React from 'react';

import MenuInterativo from '../components/MenuInterativo';
import MenuAnimatioScroll from '../components/MenuAnimationScroll';

export default function About() {
    return (
        <>
            <MenuInterativo/>
            <MenuAnimatioScroll/>
            <div>
                <h1>Teste esta rota é about</h1>
            </div>
        </>
    );
}