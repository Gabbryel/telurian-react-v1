import React from 'react';
import './Item.scss';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import renderPrice from '../utils/renderPromoPrice';

const Item = ({btnPathname, imgUrl, alt, paypalBtn, paypalPromo, itemName, itemDescription, delivery, morePhotos, soldOut}) => {
    const {pathname} = useLocation()
    return(
        <div className='item'>
            <div className='item-photo'>
                {pathname === '/order' && soldOut ? <div className='sold-out'></div> : null}
                <img src={imgUrl} alt={alt}/>
                {pathname === '/about' ? <Link to={btnPathname}><button>{morePhotos}</button></Link> : null}
                {pathname ==='/order' && !soldOut ? <div className='paypal' dangerouslySetInnerHTML={{__html: renderPrice(paypalPromo, paypalBtn)}}></div> : null }
            </div>
            <div className='item-description'>
                <h3>{itemName}</h3>
                {itemDescription.map((el, i) => <p key={i}>{el}</p>)}
                { pathname === '/order' ? <p>{delivery}</p> : null}
            </div>
        </div>
    )
}





export default Item;