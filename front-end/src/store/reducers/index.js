import { combineReducers } from 'redux';
import selectedItemMenu from './selectedItemMenu';
import page from './page';
import listData from './listData';
import login from './login';

export default combineReducers({
    selectedItemMenu,
    page,
    listData,
    login
});
