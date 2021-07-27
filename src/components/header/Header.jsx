import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
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
                <NavLink className="option" to="/signin">
                    SIGN IN
                </NavLink>
            </div>
        </div>
    )
}

export default Header
