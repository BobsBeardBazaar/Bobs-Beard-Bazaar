import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const User = ({ user }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center">
                    <h3>{ user.name }</h3>
                    <h4>{ user.email }</h4>
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        user: state.users.selectedUser
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(User);
