import { SET_ITEM_MENU } from '../constants';

const initialState = 'companies';

const selectedItemMenu = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM_MENU:
            return action.payload;
        default:
            return state;
    }
};

export default selectedItemMenu;
