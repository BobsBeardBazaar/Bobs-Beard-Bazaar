import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const SamplePage = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center">
                    <h1>Put stuff here!</h1>
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(SamplePage);
