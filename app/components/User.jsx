import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

const User = ({ user }) => {

    return (
      <div className="row">
            <div className="col s12">
                <div className="card grey lighten-4">
                    <div className="card-content black-text">
                        <span><Link to="#" className="card-title">{ user.name }</Link></span>
                    </div>
                    <div className="card-action black-text">
                        <Link className="grey-text darken-2" to="#">Comment</Link>
                        <Link className="grey-text darken-2" to="#">Report as abuse</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
