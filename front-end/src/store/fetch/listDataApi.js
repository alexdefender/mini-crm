import axios from 'axios';
import { dataUrls } from '../../config/URLs';

const getListDataApi = (value) =>
    axios({
        url: dataUrls.url(value),
        timeout: 20000,
        method: 'get',
        responseType: 'json',
    }).then((res) => {
        if (res.status === 200) return res.data;
        throw res;
    });

const addItemDataApi = (value, data) =>
    axios({
        url: dataUrls.url(value),
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data,
    }).then((res) => {
        if (res.status === 200) return res.data;
        throw res;
    });

const editItemDataApi = (value, data) =>
    axios({
        url: dataUrls.url(value),
        timeout: 20000,
        method: 'put',
        responseType: 'json',
        data,
    }).then((res) => {
        if (res.status === 200) return res.data;
        throw res;
    });

const deleteItemDataApi = (value, id) =>
    axios({
        url: dataUrls.selectData(value, id),
        timeout: 20000,
        method: 'delete',
        responseType: 'json',
    }).then((res) => {
        if (res.status === 200) return res.data.id;
        throw res;
    });

export { getListDataApi, addItemDataApi, editItemDataApi, deleteItemDataApi };
