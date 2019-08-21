import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from './actions';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import IMG from './Mickey.png'

import './App.scss';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.error !== '' && (<div className="error-text">{this.props.error}</div>)}
          <header>
            <img src={IMG} alt="logo"></img>
            <nav>
              {this.props.loggedIn && (
                <>
                  <Link to="/my-friends">myFriends</Link>
                  <Link onClick={this.props.logout} to="/">Logout</Link>
                </>
              )}
            </nav>
          </header>
          <Route exact path="/" component={Login} />
          {this.props.loggedIn && (<PrivateRoute path="/my-friends" component={FriendsList} />)}
        </div>
      </Router>
    );
  }
}

const mstp = state => ({
  error: state.error,
  loggedIn: state.loggedIn,
});


export default connect(mstp, { logout })(App);
