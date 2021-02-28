import React from 'react';
import './AboutTelurian.scss';
import {Link} from 'react-router-dom';


const AboutTelurian = () => {
    return(
        <div className='about-telurian'>
            <h3>About The Project</h3>
                <p>This selection represents the very first official compilation of rominimal music
                    ever released on CD and it is a beautiful project whose main purpose is to promote
                    the music we love and the kind of work we do in this field as a label. <Link to='about-telurian'>more info</Link></p>
                <p>But in the process of making it, we let ourselves feel inspired by the beauty of Tellurium,
                    a very rare natural element that was discovered in Romania in 1782 and is historically and
                    economically important for our country. <Link to='about-tellurium'>more info</Link></p>
                <p>The name TELURIAN comes from tellurium, as a tribute to its origin. We are fascinated by its
                    history, background, name, etymology, structure, uniqueness, sparkle, properties, utilities,
                    scarcity and lack of awareness - this way Telurian was born!</p>
                <p>The tracklist includes all the artists of our agency plus a few special guests who
                    we appreciate and with whom we have a long and lucrative colaboration.
                    We have tried to cover all the sub-styles and trends in the rominimal scene nowadays and to
                    deliver the highest level in music and artwork - we hope you’ll love it!</p>
                <p>Enjoy the music, keep cool, stay safe and be kind to people and nature.</p>
                <p>The producers</p>
        </div>
    )
}


export default AboutTelurian;