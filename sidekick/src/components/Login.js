import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginFetch } from "../actions";
import Loader from 'react-loader-spinner';

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.loginFetch(this.state);
    }

    render() {
        return (
            <div className="login-page">
                {this.state.waiting ? (
                    <Loader type="Rings" color="palevioletred" width="33" />
                ) : (
                        <form onSubmit={this.handleLogin}>
                            <input type="text"
                                name="username"
                                onChange={this.handleChange}
                                placeholder="username"
                                value={this.state.username}
                                required />

                            <input type="text"
                                name="password"
                                onChange={this.handleChange}
                                placeholder="password"
                                value={this.state.password}
                                required />

                            <input type="submit" />
                        </form>
                    )}


                {this.props.loggedIn && (<Redirect to="/my-friends" />)}

            </div>
        );
    }
}

const mstp = state => ({
    error: state.error,
    loggedIn: state.loggedIn,
    waiting: state.waiting,
});

export default connect(mstp, { loginFetch })(Login);