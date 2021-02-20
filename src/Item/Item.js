import React from 'react';
import './Item.scss';
import {useLocation} from 'react-router-dom';

const Item = ({key, imgUrl, paypalBtn, itemName, itemDescription, delivery}) => {
    const {pathname} = useLocation()
    const timeNow = new Date()
    const promoTime = timeNow.getUTCHours() + 2
    console.log(promoTime)
    return(
        <div className='item'>
            <div className='item-photo'>
                <img src={imgUrl}/>
                {pathname === '/about' ? <button>More photos</button> : null}
                {pathname ==='/order' ? <div className='paypal' dangerouslySetInnerHTML={{__html: paypalBtn}}></div> : null }
            </div>
            <div className='item-description'>
                <h3>{itemName}</h3>
                {itemDescription.map(el => <p>{el}</p>)}
                { pathname === '/order' ? <p>{delivery}</p> : null}
            </div>
        </div>
    )
}





export default Item;