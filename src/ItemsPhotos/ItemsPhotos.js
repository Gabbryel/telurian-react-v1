import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './ItemsPhotos.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faArrowCircleRight, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { tddImages, tceImages } from './photos';

const ItemsPhotos = () => {
    
    
    const {pathname} = useLocation()
    const [counter, setCounter] = useState(0);

    const onCounterChange = (e) => {
        if (pathname === '/tdd-gallery') {
            if (e.target.id === 'right' && counter < tddImages.length - 1) {
                setCounter(prevState => prevState + 1)
                return counter
            } else if (e.target.id === 'left' && counter > 0) {
                setCounter(prevState => prevState -1 )
                return counter
            }
        } else if (pathname === '/tace-gallery') {
            if (e.target.id === 'right' && counter < tceImages.length - 1) {
                setCounter(prevState => prevState + 1)
                return counter
            } else if (e.target.id === 'left' && counter > 0) {
                setCounter(prevState => prevState -1 )
                return counter
            }
        }
    }
    return (
        pathname === '/tdd-gallery' ? 
            <div className='images-gallery'>
                <FontAwesomeIcon icon={faArrowCircleLeft} id='left' onClick={(e) => onCounterChange(e)} />
                <img src={tddImages[counter]} />
                <FontAwesomeIcon icon={faArrowCircleRight} id='right' onClick={(e) => onCounterChange(e)} />
                <p>{counter + 1}/{tddImages.length}</p>
                <Link to='/about'><FontAwesomeIcon icon={faTimesCircle}id='close'/></Link>
            </div> 
        : pathname === '/tace-gallery' ?
            <div className='images-gallery'>
                <FontAwesomeIcon icon={faArrowCircleLeft} id='left' onClick={(e) => onCounterChange(e)} />
                <img src={tceImages[counter]} alt="Telurian Zebra project" />
                <FontAwesomeIcon icon={faArrowCircleRight} id='right' onClick={(e) => onCounterChange(e)} />
                <p>{counter + 1}/{tceImages.length}</p>
                <Link to='/about'><FontAwesomeIcon icon={faTimesCircle}id='close'/></Link>
            </div>
        :null
    )
}

export default ItemsPhotos;