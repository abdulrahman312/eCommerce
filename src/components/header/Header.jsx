import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <NavLink className="option" to="/shop" activeStyle={{ color: "red", fontWeight: "bold" }}>
                    SHOP
                </NavLink>
                <NavLink className="option" to="/about">
                    ABOUT
                </NavLink>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <NavLink className="option" to="/signin" activeStyle={{ color: "red", fontWeight: "bold" }}>
                            SIGN IN
                        </NavLink>
                }
                <CartIcon />
            </div>
            {
                hidden ?
                    null :
                    <CartDropdown />
            }
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStatetoProps)(Header);
