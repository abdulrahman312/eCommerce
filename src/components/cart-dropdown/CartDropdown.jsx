import React from 'react';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import Button from '../button/Button';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
)

const mapStatetoProps = ({ cart: { cartItems } }) => ({
    cartItems,
})

export default connect(mapStatetoProps)(CartDropdown);