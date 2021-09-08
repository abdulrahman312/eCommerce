import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, hidden }) => (
    <div
        className="cart-icon"
        onClick={toggleCartHidden}
    >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapStatetoProps = ({ cart: { hidden } }) => ({
    hidden,
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);