import React from 'react';
import './Title.scss';
import {useLocation, Link} from 'react-router-dom';


const Title = () => {
    const {pathname} = useLocation();

    return(
        <div className='landing-page__title'>
            { pathname === '/' ? <h1 id='title' style={{fontFamily: 'Abw', paddingTop: '0em'}}><Link to="/">TELURIAN</Link></h1> 
            : pathname === '/about' || pathname === '/order' || pathname === '/merch'? <h1 id='title' style={{fontFamily: 'Anor', paddingTop: '2em'}}><Link to="/">TELURIAN</Link></h1>
            : null }
            <h2>THE ROMINIMAL EXPERIENCE</h2>
        </div>
    );
}

export default Title;