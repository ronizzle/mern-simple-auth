import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

import {setCurrentUser, logoutUser} from './actions/authActions';
import {Provider} from 'react-redux';
import store from './store';

import Landing from './components/Landing/Landing';
import Register from './components/Registration/Registration';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

if (localStorage.jwtToken) {

    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {

        store.dispatch(logoutUser());

        window.location.href = './login';
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className='App'>
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/login' component={Login}/>
                        <Switch>
                            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
