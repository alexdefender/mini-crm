import { LOGIN_SUCCESS } from '../constants';

const initialState = false;

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return true;
        default:
            return state;
    }
};

export default login;
