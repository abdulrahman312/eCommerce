import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

function Header({ currentUser }) {
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
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Header);
