import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Title from './Title/Title.js';
import './App.scss';
import Footer from './Footer/Footer.js';
import Background from './Background/Background.js';
import AboutContainer from './AboutContainer/AboutContainer';
import ItemsContainer from './ItemsContainer/ItemsContainer';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import PopUpTelurian from './AboutPopUps/PopUpTelurian';
import TShirtsContainer from './TShirtsContainer/TShirtsContainer.js';




function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  let mobileHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${mobileHeight}px`);
  window.addEventListener('resize', () => {
  let mobileHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${mobileHeight}px`);
  });

    return (
          <div className="App">
              <Background />
            <Switch>
              <Route exact path="/">
                <h3 id='out'>OUT NOW</h3>
                <Title />
                <button id='enter-btn'><Link to="/about">ENTER</Link></button>
              </Route>
              <Route exact path="/about">
                <>
                  <HamburgerMenu />
                  <Title />
                  <AboutContainer /> 
                  <ItemsContainer/> 
                  <button id='order-here'><Link to="/order">ORDER HERE</Link></button>
                </>
              </Route>
              <Route exact path="/order">
                <>
                  <HamburgerMenu />
                  <Title />
                  <ItemsContainer/>
                </>
              </Route>
              <Route exact path="/merch">
                <>
                  <HamburgerMenu />
                  <Title />
                  <TShirtsContainer />
                </>
              </Route>
              <Route path="/*">
                <h3 id='out'>OUT NOW</h3>
                <Title />
                <button id='enter-btn'><Link to="/about">ENTER</Link></button>
              </Route>
            </Switch>
            
            <Footer />
          </div>
    )
}

export default App;
