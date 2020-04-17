export const requireAuth = (nextState, replace) => {
    const isLogin = window.localStorage.getItem('loginSuccess');
    if (!isLogin) {
        replace('/');
    }
};
