import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {login} from 'APP/app/reducers/auth';

/* -----------------    COMPONENT     ------------------ */

const Login = ({ login }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col s6 offset-s3 center">
                    <div className="card grey lighten-5">
                        <div className="card-content" id="mainSet">
                            <p className="card-title">Please sign in:</p>
                            <form onSubmit={evt => {
                                    evt.preventDefault()
                                    login(evt.target.username.value, evt.target.password.value)
                                }}>
                                <input placeholder="bob@example.com" name="username" />
                                <label htmlFor="username" className="left">Username</label>
                                <input placeholder="Password" name="password" type="password" />
                                <label htmlFor="password" className="left">Password</label>
                                <input className="waves-effect waves-light btn" type="submit" value="Login" />
                            </form>
                        </div>
                    </div>
                    <p>try these... username: `andrew@thebeardsarecoming.io` password: `1234`</p>
                </div>
            </div>
        </div>
    );
};

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => ({});
const mapDispatch = { login };

export default connect(mapProps, mapDispatch)(Login);
