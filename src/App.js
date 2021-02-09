import React, { useState, useEffect } from 'react';
import Title from './Title/Title.js';
import './App.scss';
import Footer from './Footer/Footer.js';
import Background from './Background/Background.js';
import AboutContainer from './AboutContainer/AboutContainer';
import ItemsContainer from './ItemsContainer/ItemsContainer';




function App() {
  const [ background, setBackground ] = useState("https://res.cloudinary.com/https-www-zebramusic-net/image/upload/q_auto/v1609322372/backgrounds/tellurium_cc7csd.png");
  const [ page, setPage ] = useState('landing');
  const [ font, setFont ] = useState('Abw');
  const [titlePadding, setTitlePadding] = useState(0);
  const titleBtn = document.getElementById('title');
  const orderHereBtn = document.getElementById('order-here');

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const onPageChange = (e) => {
    if (page === 'landing') {
      setPage('about');
      setBackground('https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1609321724/backgrounds/fotoBkg_hy7n23.jpg');
      setFont('Anor');
      setTitlePadding(2);
    } else if ( (page === 'about' || page === 'order') && e.target === titleBtn ) {
      setPage('landing');
      setBackground('https://res.cloudinary.com/https-www-zebramusic-net/image/upload/q_auto/v1609322372/backgrounds/tellurium_cc7csd.png');
      setFont('Abw');
      setTitlePadding(0);
    }
  }

  const fromAboutToOrder = () => {
    setPage('order');
    setTitlePadding(2);
  }
  
    return (
        <div className="App">
          <Background background={background}/>
          {page === 'landing' ? <h3 id='out'>OUT NOW</h3> : null}
          <Title font={font} titlePadding={titlePadding} onPageChange={onPageChange}/>
          {page === 'landing' ? <button id='enter-btn' onClick={onPageChange}>ENTER</button> : null}
          {page === 'about' ? <><AboutContainer /> <ItemsContainer page={page}/> <button id='order-here' onClick={fromAboutToOrder}>ORDER HERE</button></> : null }
          {page === 'order' ? <ItemsContainer page={page}/> : null }
          <Footer />
        </div>
    )
}

export default App;
