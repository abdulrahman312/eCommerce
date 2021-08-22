import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, hidden }) => (
    <div
        className="cart-icon"
        onMouseEnter={toggleCartHidden}
        onMouseLeave={toggleCartHidden}
        onClick={
            hidden ?
                toggleCartHidden :
                null
        }
    >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStatetoProps = ({ cart: { hidden } }) => ({
    hidden,
})

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);