import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import AddFriend from './AddFriend';

const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className='FriendsList'>
      {friends.map(friend => {
        return (
          <div className='friend'>
            {friend.name}
            {friend.age}
            {friend.email}
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
