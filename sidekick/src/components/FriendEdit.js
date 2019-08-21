import React, { Component } from 'react';

class FriendEdit extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    resetForm = e => {
        e.preventDefault();
        this.setState({
            name: '',
            age: '',
            email: '',
        });
    }

    render() {
        return (
            <form className="FriendForm" onSubmit={props.addFriend}>
                <input onChange={props.handleChange}
                    name="name"
                    type="text"
                    placeholder="name"
                    value={props.name}
                    required />

                <input onChange={props.handleChange}
                    name="age"
                    type="text"
                    placeholder="age"
                    value={props.age}
                    required />

                <input onChange={props.handleChange}
                    name="email"
                    type="text"
                    placeholder="email"
                    value={props.email}
                    required />

                <div className="FriendForm__buttons">
                    <input type="submit" value="Submit" />
                    <input type="reset" onClick={props.resetForm} />
                </div>

            </form>
        );
    }
}

export default FriendEdit;