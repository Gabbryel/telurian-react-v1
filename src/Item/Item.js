import React from 'react';
import './Item.scss';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Item = ({key, btnPathname, imgUrl, alt, paypalBtn, itemName, itemDescription, delivery, morePhotos}) => {
    const {pathname} = useLocation()
    const timeNow = new Date()
    const promoTime = timeNow.getUTCHours() + 2
    console.log(promoTime)
    return(
        <div className='item'>
            <div className='item-photo'>
                <img src={imgUrl} alt={alt}/>
    {pathname === '/about' ? <Link to={btnPathname}><button>{morePhotos}</button></Link> : null}
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