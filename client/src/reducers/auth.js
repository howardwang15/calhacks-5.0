import { LOGIN_USER_SUCCESS } from '../actions/login';

const defaultState = {
    loggedIn: false,
};

export default (state = { defaultState }, action) => {
    switch (action.type) {
    case LOGIN_USER_SUCCESS:
        return { ...state, loggedIn: true };
    default:
        return state;
    }
};
