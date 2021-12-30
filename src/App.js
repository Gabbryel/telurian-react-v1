import React, { useEffect } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Title from './Title/Title.js';
import './App.scss';
import Footer from './Footer/Footer.js';
import Background from './Background/Background.js';
import AboutContainer from './AboutContainer/AboutContainer';
import ItemsContainer from './ItemsContainer/ItemsContainer';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import TShirtsContainer from './TShirtsContainer/TShirtsContainer.js';
import MoreAboutTelurian from './MoreAboutTelurian/MoreAboutTelurian';
import {useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTshirt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ItemsPhotos from './ItemsPhotos/ItemsPhotos.js';


function App() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

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
                <button id='enter-btn'><Link to="/about-telurian-1">TELURIAN 1</Link></button>
                <button id='enter-btn'><Link to="/about-telurian-2">TELURIAN 2</Link></button>
              </Route>
              <Route exact path="/about-telurian-1">
                <>
                  <HamburgerMenu />
                  <Title />
                  <AboutContainer /> 
                  <ItemsContainer/> 
                  <button id='order-here'><Link to="/order">ORDER HERE</Link></button>
                </>
              </Route>
              <Route exact path="/about-telurian-2">
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
              <Route exact path="/about-telurian">
                <Title />
                <MoreAboutTelurian />
              </Route>
              <Route exact path="/about-tellurium">
                <Title />
                <MoreAboutTelurian />
              </Route>
              <Route path="/tdd-gallery">
                <Title />
                <ItemsPhotos />
              </Route>
              <Route path="/tace-gallery">
                <Title />
                <ItemsPhotos />
              </Route>
              <Route path="*">
                <h3 id='out'>OUT NOW</h3>
                <Title />
                <div id="no-route-menu">
                  <p>This page does not exists. Choose below a valid route!</p>
                  <Link to='/about'><FontAwesomeIcon icon={faInfoCircle} /></Link>
                  <Link to='/order'><FontAwesomeIcon icon={faShoppingCart} /></Link>
                  <Link to='/merch'><FontAwesomeIcon icon={faTshirt} /></Link>
                </div>
              </Route>
            </Switch>
            <Footer />
          </div>
    )
}

export default App;
