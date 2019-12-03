import React, {Fragment} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../views/portal/Dashboard/Dashboard";

const Portal = () => {
    return (
        <Fragment>
            <Switch>
                <Redirect from="/app" to="/app/dashboard" exact/>
                <Route path="/app/dashboard" component={Dashboard} exact/>
            </Switch>
        </Fragment>
    )
};

export default Portal;