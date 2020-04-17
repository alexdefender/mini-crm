import { ADD_LIST_DATA } from '../constants';

const initialState = [];

const listData = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_DATA:
            return [...action.payload];
        default:
            return state;
    }
};

export default listData;
