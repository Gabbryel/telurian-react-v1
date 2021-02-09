import React from 'react';
import './Background.scss';

const Background = ({background}) => {
    console.log(background)
    return(
        <div className='background'>
            <img src={background} />
        </div>
    )
}

export default Background;