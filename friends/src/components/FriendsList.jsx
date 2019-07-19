import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// import { Card, Image } from 'semantic-ui-react';
import { axiosWithAuth } from './axiosWithAuth';
import AddFriend from './AddFriend';
import './grid.scss';

const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='row'>
      {friends.map(friends => {
        return (
          <div className='medium-4 columns flex-container'>
            <img src={friends.img} alt='img' />
            <div className='card-section'>
              <h4>friends.name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                illum!
              </p>
            </div>
          </div>
        );
      })}
      <Route
        path='/friends/add'
        render={props => <AddFriend {...props} setFriends={setFriends} />}
      />
    </div>
  );
};

export default FriendsList;
