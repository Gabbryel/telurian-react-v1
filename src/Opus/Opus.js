import React from 'react';
import './Opus.scss';


const Opus = ({opusName, opusTracks}) => {
    return(
        <ul className='opus'>
            <p>{opusName}</p>
            {opusTracks.map(el => <li>{el}</li>)}
        </ul>
    )
}


export default Opus;