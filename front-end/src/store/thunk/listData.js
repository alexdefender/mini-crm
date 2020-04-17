import {
    getListDataApi,
    addItemDataApi,
    editItemDataApi,
    deleteItemDataApi,
} from '../fetch/listDataApi';
import { addListData } from '../actions';
import store from '../index';

const getDataList = (value) => (dispatch) => {
    dispatch(addListData([]));
    getListDataApi(value)
        .then((data) => {
            dispatch(addListData(data));
        })
        .catch((e) => {
            console.error(e.message);
        });
};

const addItemData = (value, data) => (dispatch) => {
    addItemDataApi(value, data)
        .then((data) => {
            dispatch(getDataList(value));
        })
        .catch((e) => {
            console.error(e.message);
        });
};

const editItemData = (value, id) => (dispatch) => {
    editItemDataApi(value, id)
        .then((data) => {
            dispatch(getDataList(value));
        })
        .catch((e) => {
            console.error(e.message);
        });
};

const deleteItemData = (value, id) => (dispatch) => {
    deleteItemDataApi(value, id).then((data) => {
        const { listData } = store.getState();
        const updatedList = listData.filter((item) => item._id !== id);
        dispatch(addListData(updatedList));
    });
};

export { getDataList, addItemData, editItemData, deleteItemData };
