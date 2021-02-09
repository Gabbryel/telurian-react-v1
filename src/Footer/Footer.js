import React from 'react';
import './Footer.scss';
import wa from '../images/wa.svg';
import email from '../images/envelope.svg';
import facebook from '../images/facebook-square.svg';
import instagram from '../images/instagram-square.svg';
import bandcamp from '../images/bandcamp.svg';
import soundcloud from '../images/soundcloud.svg';


const Footer = () => {
    const date = new Date();
    const actualYear = date.getFullYear()
    return(
        <div className='footer'>
            <p>a ZEBRA RECORDS production in colaboration with REBEL MUSIC</p>
            <div className='footer-logo__section'>
                <a href="https://www.facebook.com/ZbrRec/" target='_blank' rel="noreferrer"><img src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609322692/backgrounds/logo_zbr_ispxku.png" alt="zebra music" /></a>
                <p className='footer-contact-copyright'>&#169; & (p) 2020 - {actualYear} ZEBRA RECORDS</p>
                <a href="https://www.facebook.com/rebelmusicromania" alt="www.facebook.com/rebelmusicromania" target='_blank' rel="noreferrer"><img src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609322691/backgrounds/logo_rebel_nwkpks.png" alt="rebel music" /></a>
            </div>
            <div className='footer-contact'>
                <div className='footer-contact-images'>
                    <a href="https://api.whatsapp.com/send?phone=40745944367&text=I want to know more about..." target='_blank' rel="noreferrer"><img src={wa} alt='whatsapp' /></a>
                    <a href="mailto:telurian@zebramusic.net" target='_blank' rel="noreferrer"><img src={email} alt='email adress' /></a>
                    <a href="http://www.facebook.com/telurian.zebra" target='_blank' rel="noreferrer"><img src={facebook} alt='facebook link' /></a>
                    <a href="http://www.instagram.com/telurian_rominimal" target='_blank' rel="noreferrer"><img src={instagram} alt='instagram link' /></a>
                    <a href="http://www.zebrarec.bandcamp.com/" target='_blank' rel="noreferrer"><img src={bandcamp} alt='bandcamp link' /></a>
                    <a href="http://www.soundcloud.com/zebrarec" target='_blank' rel="noreferrer"><img src={soundcloud} alt='souncloud link' /></a>
                </div>
            </div>
            <div className='footer-credits'>
                <p>Designed by Telurian Team,  build in 🇷🇴  with ♥︎ by <a href="https://www.facebook.com/Constantin-Gabriel-Ursache-100787028625687" id="wd"><span>G</span>abriel <span>U</span>rsache</a></p>
                {/* <p><a href="javascript:cookieConsent.changeConsent();">Change cookies settings</a></p> */}
            </div>
        </div>
    );
}

export default Footer;



















