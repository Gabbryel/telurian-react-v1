import React from 'react';
import Opus from '../Opus/Opus.js';
import { opuses } from './opuses.js';



const OpusContainer = () => {
    return (
        <div className='opuses-container'>
            {opuses.map((op, i) => <Opus key={i} opusName={op.name} opusTracks={op.tracks}/>)}
        </div>
    )
}

export default OpusContainer;