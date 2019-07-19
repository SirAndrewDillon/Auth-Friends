import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = () => {
  return (
    <Menu>
      <nav className='ui tabular menu'>
        <Menu.Item>
          <Link name='Home' to='/'>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/friends'>Friends List</Link>
        </Menu.Item>
        {localStorage.getItem('token') && (
          <Menu.Item>
            <Link to='/friends/add'>Add Friends</Link>
          </Menu.Item>
        )}
      </nav>
    </Menu>
  );
};

export default Nav;
