import React from 'react';
import './TShirtsContainer.scss';

const tshirts = [
    {
        name: 'Telurian T-shirt no. 1',
        img1Url: 'https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1614619063/T-Shirts/model_1_front_axyxhr.jpg',
        alt1: 'Telurian T-shirt no. 1 - front',
        img2Url: 'https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1614619063/T-Shirts/model_2_front_v3ujz8.jpg',
        alt2: 'Telurian T-shirt no. 1 - back',
        payPal: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="KYG7GUMM9C6CC" />
                    <input type="hidden" name="on0" value="Sizes" /><select name="os0" >
                        <option value="M - shipping Romania">M - shipping Romania €30.00 EUR</option>
                        <option value="M - shipping EU">M - shipping EU €42.00 EUR</option>
                        <option value="M - shipping outside EU">M - shipping outside EU €53.00 EUR</option>
                        <option value="L - shipping Romania">L - shipping Romania €30.00 EUR</option>
                        <option value="L - shipping EU">L - shipping EU €42.00 EUR</option>
                        <option value="L - shipping outside EU">L - shipping outside EU €53.00 EUR</option>
                        <option value="XL - shipping Romania">XL - shipping Romania €30.00 EUR</option>
                        <option value="XL - shipping EU">XL - shipping EU €42.00 EUR</option>
                        <option value="XL - shipping outside EU">XL - shipping outside EU €53.00 EUR</option>
                    </select>
                    <input type="hidden" name="currency_code" value="EUR" />
                    <input type="image" class='buy-now' src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1612710144/buynowBtn_qpl4fq.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>`
    },
    {
        name: 'Telurian T-shirt no. 2',
        img1Url: 'https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1614619063/T-Shirts/model_2_front_v3ujz8.jpg',
        alt1: 'Telurian T-shirt no. 2 - front',
        img2Url: 'https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1614619063/T-Shirts/model_2_back_nhfdoa.jpg',
        alt2: 'Telurian T-shirt no. 2 - back',
        payPal: `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TWD5LCF7ZPRJJ">
                <input type="hidden" name="on0" value="Sizes"><select name="os0">
                    <option value="M - shipping Romania">M - shipping Romania €30.00 EUR</option>
                    <option value="M - shipping EU">M - shipping EU €42.00 EUR</option>
                    <option value="M - shipping outside EU">M - shipping outside EU €53.00 EUR</option>
                    <option value="L - shipping Romania">L - shipping Romania €30.00 EUR</option>
                    <option value="L - shipping EU">L - shipping EU €42.00 EUR</option>
                    <option value="L - shipping outside EU">L - shipping outside EU €53.00 EUR</option>
                    <option value="XL - shipping Romania">XL - shipping Romania €30.00 EUR</option>
                    <option value="XL - shipping EU">XL - shipping EU €42.00 EUR</option>
                    <option value="XL - shipping outside EU">XL - shipping outside EU €53.00 EUR</option>
                </select>
                <input type="hidden" name="currency_code" value="EUR">
                <input type="image" class='buy-now' src="https://res.cloudinary.com/https-www-zebramusic-net/image/upload/v1612710144/buynowBtn_qpl4fq.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
        `
    }
]
const renderTShirts = tshirts.map(t => 
    <div className='tshirt'>
        <p>{t.name}</p>
        <div className='tshirts-images'>
            <img src={t.img1Url} alt={t.alt1}/>
            <img src={t.img2Url} alt={t.alt2}/>
        </div>
    <div className='tshirt-paypal' dangerouslySetInnerHTML={{__html: t.payPal}}>
    </div>
    </div>)
const TShirtsContainer = () => {
    return(
        <div className='tshirts-container'>
            <p>“THE OPENING PARTY”</p> 
            <p>LIMITED EDITION T-SHIRT!</p>
            <p>First official T-shirt run of TELURIAN!</p>
            <p>Limited “The Opening Party” edition of 100 units.</p>
            <p>Sizes: M, L, XL</p>
            <p>BONUS: one-time FREE download link for TELURIAN DIGITAL EDITION (mp3)</p>
            <div className='tshirts-render'>
                {renderTShirts}
            </div>
        </div>
    )
}


export default TShirtsContainer;