import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';
import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const Checkout = ({cartItems, cartItemsTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        <div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className="total">TOTAL: ${cartItemsTotal}</div>
        </div>
    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal,
})

export default connect(mapStatetoProps)(Checkout);