import React from 'react';
import CartItem from '../cart-item/CartItem';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

import Button from '../button/Button';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <Button onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</Button>
    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStatetoProps)(CartDropdown));