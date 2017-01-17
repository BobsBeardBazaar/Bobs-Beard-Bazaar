import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import User from './User';

/* -----------------    COMPONENT     ------------------ */

const Users = ({ users }) => {
    console.log('USERS', users);

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center">
                    {
                        users.map(user => {
                            return <User user={user} key={user.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        users: state.users
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Users);
