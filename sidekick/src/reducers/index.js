import {
    GET_FRIENDS,
    LOGIN_FETCH,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from '../actions';

const initialState = {
    error: '',
    friends: [],
    loggedIn: false,
    waiting: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FRIENDS:
            return {
                ...state,
                friends: [...action.payload]
            };
        case LOGIN_FETCH:
            return {
                ...state,
                error: false,
                waiting: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                error: false,
                loggedIn: true,
                waiting: false,
            }

        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                waiting: false,
            }

        case LOGOUT:
            return {
                ...state,
                friends: [],
                loggedIn: false,
            }

        default: return state;
    }
};

export default reducer;