import React from "react";
import Index from "./index/Index";
import StateVsProps from "./StateVsProps/StateVsProps";
import StateHook from "./StateHook/StateHook";
import MemoHook from "./MemoHook/MemoHook";
import RefHook from "./RefHook/RefHook";
import ContextHook from "./ContextHook/ContextHook";

//Dependencies
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/StateVsProps" exact component={StateVsProps} />
                    <Route path="/StateHook" exact component={StateHook} />
                    <Route path="/MemoHook" exact component={MemoHook} />
                    <Route path="/RefHook" exact component={RefHook} />
                    <Route path="/ContextHook" exact component={ContextHook} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;
