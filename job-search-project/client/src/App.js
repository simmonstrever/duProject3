import React, { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import { Col } from 'react-materialize';
// import { Wrapper } from "./styles";
// import Layout from "./components/Parallax"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

//redux
import {Provider} from "react-redux"
import store from "./store"
import {loadUser} from "./actions/auth"
import setAuthToken from "./utils/setAuthToken"

import "./App.css"

if(localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser())
    }, [])
    return (
       <Provider store = {store}>
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login}/>
                </Switch>
                </Fragment>
        </Router>
        </Provider>
    );
};

export default App;