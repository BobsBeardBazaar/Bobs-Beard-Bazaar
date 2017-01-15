import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const Home = () => {

    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="row">
                <div className="col m5 s10 offset-m7 offset-s2">
                        <h1 className="white-text">Bring meaning to your life. Buy facial hair.</h1>
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Home);
