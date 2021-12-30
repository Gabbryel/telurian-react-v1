import React from 'react';
import './ItemsContainer.scss';
import Item from '../Item/Item';
import { items, telurian2 } from './items.js';
import {useLocation} from 'react-router-dom';


const ItemsContainer = () => {
    const {pathname} = useLocation();
    const renderItems = (arr) => arr.map((el, i) => <Item key={i}
                                                    imgUrl={el.imgUrl}
                                                    alt={el.alt}
                                                    paypalBtn={el.payPalBtn}
                                                    paypalPromo={el.payPalPromo}
                                                    itemName={el.itemName}
                                                    itemDescription={el.itemDescription}
                                                    delivery={el.delivery}
                                                    btnPathname={el.pathname}
                                                    morePhotos={el.morePhotos}
                                                    soldOut={el.soldOut} />)
    const allItems = telurian2.concat(items)
    return(
        <div className='items-container'>
            {pathname === '/about-telurian-1' ? <p>Three Different High-end Versions</p> : pathname === '/about-telurian-2' ? <p>Two Versions</p> : null} 
        {pathname === '/order' ? <p id='order-page__punch-line'>Order your copy here!</p> : null }
        { pathname === '/about-telurian-1' ? renderItems(items) : pathname === '/about-telurian-2' ? renderItems(telurian2) : renderItems(allItems) }
        { pathname === '/order' ? <div className='order-page__shipping'>
                                        <p>Shipping Options:</p>
                                        <p>Shipping in Romania</p>
                                        <p>Posta Romana 5 Euro (including CD protection) 2-4 days.</p>
                                        <p>Courier 7 Euro (including CD protection) 1-2 days.</p>
                                        <p>Shipping in EU</p>
                                        <p>Posta Romana 17 Euro (including CD protection).</p>
                                        <p>Courier 27 Euro (including CD protection).</p>
                                        <p>Shipping outside EU</p>
                                        <p>Posta Romana 28 Euro (including CD protection).</p>
                                        <p>Courier 47 Euro (including CD protection).</p>
                                        <p>⚠️ If you buy more than one copy, please choose the price with shipping included just for the most expensive item!</p>
                                        <p>Dont forget to email us your phone number!</p>
                                    </div> : null }
        </div>
    )
}

export default ItemsContainer;