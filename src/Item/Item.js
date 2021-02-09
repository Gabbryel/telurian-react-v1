import React from 'react';
import './Item.scss';

const Item = ({page, imgUrl, paypalBtn, itemName, itemDescription, delivery}) => {
    return(
        <div className='item'>
            <div className='item-photo'>
                <img src={imgUrl}/>
                {page === 'about' ? <button>More photos</button> : null}
                {page ==='order' ? <div className='paypal' dangerouslySetInnerHTML={{__html: paypalBtn}}></div> : null }
            </div>
            <div className='item-description'>
                <h3>{itemName}</h3>
                {itemDescription.map(el => <p>{el}</p>)}
                { page === 'order' ? <p>{delivery}</p> : null}
            </div>
        </div>
    )
}





export default Item;