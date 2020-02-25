/*
入口 JS
 */

//react
import React from "react";
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
//components
import Register from "./containers/register/register";
import Login from "./containers/login/login";
import Main from "./containers/main/main";
import store from "./redux/store";

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/register'><Register/></Route>
                <Route path='/login'><Login/></Route>
                <Route><Main/></Route>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById('root'));