import axios from 'axios';
import { login } from '../../config/URLs';

const loginApi = (data) =>
    axios({
        url: login.url,
        timeout: 20000,
        method: 'put',
        responseType: 'json',
        data,
    }).then((res) => {
        if (res.status === 200) return res.data;
        throw res;
    })

export { loginApi };
