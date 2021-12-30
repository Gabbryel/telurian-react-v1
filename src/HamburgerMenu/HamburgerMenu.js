import React from 'react';
import {Link} from 'react-router-dom';
import './HamburgerMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_telurium.png';

const HamburgerMenu = () => {
    return(
        <div className='hamburger-container'>
            <div className='hamburger-links'>
                <ul>
                    <li><Link to='/'><img src={logo} id='hamburger-menu-logo'alt='telurian by zebra music'/></Link></li>
                    <li><Link to='/about-telurian-1' style={{fontFamily: 'Anor'}}>T1</Link></li>
                    <li><Link to='/about-telurian-2' style={{fontFamily: 'Anor'}}>T2</Link></li>
                    <li><Link to='/order'><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                    <li><Link to='/merch'><FontAwesomeIcon icon={faTshirt} /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HamburgerMenu;