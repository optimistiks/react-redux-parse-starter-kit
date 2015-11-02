import React from 'react';
import {Router, Route, Redirect} from 'react-router';
import {Provider} from 'react-redux';

import store from '../../modules/store/index';

import App from '../App/App.jsx';
import PublicGateway from '../PublicGateway/PublicGateway.jsx';
import ProtectedGateway from '../ProtectedGateway/ProtectedGateway.jsx';
import RegistrationPage from '../../../public/components/RegistrationPage/RegistrationPage.jsx';
import LoginPage from '../../../public/components/LoginPage/LoginPage.jsx';
import DashboardPage from '../../../dashboard/components/DashboardPage/DashboardPage.jsx';

const Routes = (

    <Provider store={store}>
        <Router>
            <Redirect from="/" to="/dashboard"/>
            <Route path="/" component={App}>
                <Route component={PublicGateway}>
                    <Route path="register" component={RegistrationPage}/>
                    <Route path="signin" component={LoginPage}/>
                </Route>
                <Route component={ProtectedGateway}>
                    <Route path="dashboard" component={DashboardPage}/>
                </Route>
            </Route>
        </Router>
    </Provider>

);

export default Routes;
