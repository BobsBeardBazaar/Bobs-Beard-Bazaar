import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { deleteUser, toggleAdmin } from 'APP/app/action-creators/users';
console.log('outside component', deleteUser)
/* -----------------    COMPONENT     ------------------ */

const User = ({ user, deleteUser, toggleAdmin }) => {

    console.log('inside component', deleteUser)
    return (
      <div className="row">
            <div className="col s12">
                <div className="card grey lighten-4">
                    <div className="card-content black-text">
                        <h5>{ user.name }</h5>
                    </div>
                    <div className="card-action black-text">
                        <Link className="waves-effect waves-light btn red darken-2" onClick={() => deleteUser(user.id)}><i className="material-icons left">delete</i>Delete User</Link>
                        {
                            user.isAdmin ?
                            <Link className="waves-effect waves-light btn red darken-2" onClick={() => toggleAdmin(user.id, user.isAdmin)}>
                            <i className="material-icons left">supervisor_account</i>Disable admin
                            </Link>
                        :  <Link className="waves-effect waves-light btn green"  onClick={() => toggleAdmin(user.id, user.isAdmin)}>
                            <i className="material-icons left">supervisor_account</i>Make admin
                            </Link>
                        }
                        <Link className="waves-effect waves-light btn blue darken-2"><i className="material-icons left">vpn_key</i>Reset password</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


/* -----------------    CONTAINER     ------------------ */

const mapProps = (state, ownProps) => {
    return {
        user: ownProps.user
    };
};
const mapDispatch = { deleteUser, toggleAdmin };

export default connect(mapProps, mapDispatch)(User);
