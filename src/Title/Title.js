import React from 'react';
import './Title.scss';


const Title = ({font, titlePadding ,onPageChange}) => {
    return(
        <div className='landing-page__title'>
            <h1 id='title' onClick={onPageChange} style={{fontFamily: font, paddingTop: titlePadding + 'em'}}>TELURIAN</h1>
            <h2>THE ROMINIMAL EXPERIENCE</h2>
        </div>
    );
}

export default Title;