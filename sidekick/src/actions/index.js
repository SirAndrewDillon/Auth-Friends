import axios from 'axios';
import axiosWithAuth from '../axiosAuth';

export const ADD_FRIEND = 'ADD_FRIEND'
export const GET_FRIENDS = 'GET_FRIENDS';
export const LOGIN_FETCH = 'LOGIN_FETCH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const addFriend = e => dispatch => {
    axiosWithAuth().post(`http://localhost:5000/api/friends/${e.target.value}`)
        .then(res => {
            dispatch({ type: ADD_FRIEND, payload: res.data });
        })
        .catch(err => console.log(err));
}

export const deleteFriend = e => dispatch => {
    axiosWithAuth().delete(`http://localhost:5000/api/friends/${e.target.value}`)
        .then(res => {
            dispatch({ type: GET_FRIENDS, payload: res.data });
        })
        .catch(err => console.log(err));
}

export const loginFetch = cred => dispatch => {
    dispatch({ type: LOGIN_FETCH });
    return axios.post('http://localhost:5000/api/login', cred)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err.message });
        });
}

export const getFriends = () => dispatch => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: GET_FRIENDS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err.message });
        });
}

export const logout = () => {
    localStorage.clear();
    return ({ type: LOGOUT });
}