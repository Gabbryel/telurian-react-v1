import React from 'react';
import './Background.scss';
import {useLocation} from 'react-router-dom';

const Background = () => {
    const {pathname} = useLocation();
    const bkgLanding = "https://res.cloudinary.com/https-www-zebramusic-net/image/upload/q_auto/v1609322372/backgrounds/tellurium_cc7csd.png";
    const bkgImg = 'https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609321724/backgrounds/fotoBkg_hy7n23.jpg';
    return(
        <div className='background'>
            { pathname === '/' ? <img src={bkgLanding} />
             : pathname === '/about' || pathname === '/order' || pathname === '/merch'? <img src={bkgImg} />
             : null }
            
        </div>
    )
}

export default Background;