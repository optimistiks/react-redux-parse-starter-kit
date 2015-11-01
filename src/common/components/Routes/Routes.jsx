import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';

import store from '../../modules/store/index';

import App from '../App/App.jsx';


const Routes = (

    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>

);

export default Routes;
