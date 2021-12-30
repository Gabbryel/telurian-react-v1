import React from 'react';
import Opus from '../Opus/Opus.js';
import { opuses, opuses2 } from './opuses.js';
import { useLocation } from 'react-router-dom';



const OpusContainer = () => {
    const {pathname} = useLocation();
    return (
        <div className='opuses-container'>
            {pathname === '/about-telurian-1' ? opuses.map((op, i) => <Opus key={i} opusName={op.name} opusTracks={op.tracks}/>)
            : pathname === '/about-telurian-2' ? opuses2.map((op, i) => <Opus key={i} opusName={op.name} opusTracks={op.tracks}/>)
            : null
        }
        </div>
    )
}

export default OpusContainer;