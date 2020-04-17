import { browserHistory } from 'react-router';
import { loginApi } from '../fetch/loginApi';
// import { loginSuccess } from '../actions';

const loginAction = (user) => (dispatch) => {
    loginApi(user)
        .then((data) => {
            // dispatch(loginSuccess());
            window.localStorage.setItem('loginSuccess', true)
            browserHistory.push('/dashboard');
        })
        .catch((e) => {
            console.error(e.message);
        });
};

export { loginAction };
