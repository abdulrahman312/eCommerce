import React from 'react';

import './cart-dropdown.styles.scss';

import Button from '../button/Button';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <Button>GO TO CHECKOUT</Button>
    </div>
)

export default CartDropdown;