import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logout } from 'APP/app/reducers/auth'

/* -----------------    COMPONENT     ------------------ */

const Navbar = ({ user, logout }) => {

    return (
        <nav className="purple darken-2" role="navigation">
            <div className="nav-wrapper container">
                <Link id="logo-container" to="/" className="brand-logo"><img src="/img/beardLogo.png" width="50px" />Bob's Beard Bazaar</Link>
                <ul className="right hide-on-med-and-down">
                    { user && <li id="nav-username">{ `Welcome, ${user.name}` }</li> }
                    <li><Link to="/products">Products</Link></li>
                   { user && <li><Link to={`/orders/${user.id}`}>Orders</Link></li> }
                   
                    { user && <li><Link to="" onClick={ logout }>Logout</Link></li> }
                    { user && <li><Link to={`/cart/${user.id}`}><i className="material-icons white-text">shopping_cart</i></Link></li> }
                    { user && <li><Link to=""><i className="material-icons white-text">settings</i></Link></li> }
                    { user && user.isAdmin && <li><Link to="/users"><i className="material-icons white-text">supervisor_account</i></Link></li> }
                    { !user && <li><Link to="/login">Login</Link></li> }
                </ul>

                <ul id="nav-mobile" className="side-nav">
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
);
};

// PropType validaiton
Navbar.propTypes = {

};


/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ auth }) => ({ user: auth });
const mapDispatch = { logout };

export default connect(mapProps, mapDispatch)(Navbar);
