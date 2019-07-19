import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/friends'>Friends List</Link>
      {localStorage.getItem('token') && (
        <Link to='/friends/add'>Add Friends</Link>
      )}
    </nav>
  );
};

export default Nav;
