import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

import Loader from 'react-loader-spinner';
import FriendCard from './FriendCard';

class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends();
    }
    render() {
        return (
            <div className="friends-list">
                {this.props.friends.length === 0 && (<Loader type="Rings" color="palevioletred" width="33" />)}

                {this.props.friends.map(friend => {
                    return (
                        <FriendCard {...friend} key={friend.id} />
                    );
                })}
            </div>
        );
    }
}

const mstp = state => ({
    friends: state.friends,
})

export default connect(mstp, { getFriends })(FriendsList);