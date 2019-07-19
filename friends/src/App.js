import React from 'react';
import Login from './components/Login';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import { PrivateRoute } from './components/PrivateRoute';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Login} />
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
