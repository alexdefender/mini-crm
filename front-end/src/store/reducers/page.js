import { SET_PAGE } from '../constants';

const initialState = 1;

const selectedMenuItem = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return action.payload;
        default:
            return state;
    }
};

export default selectedMenuItem;
