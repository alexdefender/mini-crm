import {
    SET_ITEM_MENU,
    SET_PAGE,
    ADD_LIST_DATA,
    LOGIN_SUCCESS,
} from '../constants/index';

export const setItemMenu = (payload) => ({ type: SET_ITEM_MENU, payload });

export const setPage = (payload) => ({ type: SET_PAGE, payload });

export const addListData = (payload) => ({ type: ADD_LIST_DATA, payload });

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
