import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import {deleteItem, addItem, removeItem} from '../../redux/cart/cart.actions'

const CheckoutItem = ({dispatch, cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => {
                if (quantity === 1) 
                    dispatch(deleteItem(cartItem))
                else
                    dispatch(removeItem(cartItem))
            }}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => dispatch(deleteItem(cartItem))}>
                &#10005;
        </div>
    </div>
    )
}

export default connect(null)(CheckoutItem);