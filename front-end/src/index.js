import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';

import './index.scss';
import store from './store';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import * as serviceWorker from './serviceWorker';
import { requireAuth } from './utils/requireAuth';

const Main = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={SignIn} />
            <Route path='/dashboard' component={Dashboard} onEnter={requireAuth} />
            <Route path='*' component={SignIn} />
        </Router>
    </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
