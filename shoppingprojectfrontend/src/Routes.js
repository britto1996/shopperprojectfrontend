import React from 'react'
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
