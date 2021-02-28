import React from 'react';
import './AboutContainer.scss';
import OpusContainer from '../OpusContainer/OpusContainer';
import AboutTelurian from '../AboutTelurian/AboutTelurian';


const AboutContainer = () => {
    return(
        <div className='about-container'>
            <AboutTelurian />
            <div className='about-container__snippets'>
                <p>LISTEN SNIPPETS FROM TELURIAN</p>
                <iframe width="100%" height="280" scrolling="no" frameBorder="no" allow="autoplay" title='telurian by zebra music snippets'
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1181321461&color=%233a5e97&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false">
                </iframe>
            </div>
            <OpusContainer />
        </div>
    )
}


export default AboutContainer;