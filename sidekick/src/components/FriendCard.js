import React from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../actions';


import './FriendCard.scss';

const FriendCard = props => {
    return (
        <div className="FriendCard" key={props.id}>
            <h3>{props.name}</h3>
            <p>{props.age} years old</p>
            <a href={`${props.email}`}>{props.email}</a>
            <button onClick={props.deleteFriend} value={props.id}>Delete</button>
        </div>
    );
}

export default connect(null, { deleteFriend })(FriendCard);