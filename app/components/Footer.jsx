import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Footer = () => {

    return (
        <footer className="page-footer purple lighten-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About us</h5>
                <p className="grey-text text-lighten-4">{ `We're a family company. We've been making organic facial hair for our customers for 35 years, and we don't plan to stop.` }</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><Link className="grey-text text-lighten-3" to="/home">Home</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/products">Products</Link></li>
                  <li><Link className="grey-text text-lighten-3" to="/login">Login</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright purple darken-2">
            <div className="container">
            © 2017 Copyright Bob's Beard Bazaar
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Footer);
