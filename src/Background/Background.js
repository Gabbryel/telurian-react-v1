import React from 'react';
import './Background.scss';
import {useLocation} from 'react-router-dom';

const Background = () => {
    const {pathname} = useLocation();
    const bkgLanding = "https://res.cloudinary.com/https-www-zebramusic-net/image/upload/q_auto/v1609322372/backgrounds/tellurium_cc7csd.png";
    const bkgImg = 'https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609321724/backgrounds/fotoBkg_hy7n23.jpg';
    return(
        <div className='background'>
            { pathname === '/' ? <img src={bkgLanding} alt="Telurian from Zebra Music"/>
             : pathname === '/about-telurian-1' || pathname === '/about-telurian-2' || pathname === '/order' || pathname === '/merch' || pathname === '/about-telurian' || pathname === '/about-tellurium' || pathname === '/tdd-gallery' || pathname === '/tace-gallery' ? <img src={bkgImg} alt="Telurian from Zebra Music"/>
             : <img src={bkgLanding} alt="Telurian from Zebra Music"/> }
        </div>
    )
}

export default Background;