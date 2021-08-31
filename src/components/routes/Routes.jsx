import React from "react";
import Index from "./index/Index";
import StateVsProps from "./state-vs-props/StateVsProps";

//Dependencies
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/StateVsProps" exact component={StateVsProps} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;
