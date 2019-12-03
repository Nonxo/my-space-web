import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Index from "../views/Sign-Up";
import SignIn from "../views/Sign-In";
import ForgotPassword from "../views/forgot-password";
import ResetPasswordLink from "../views/forgot-password/ResetPasswordLink";

const Auth = () => {
    return(
        <Switch>
            <Redirect from="/" to="/login" exact/>
            <Route path="/login" component={SignIn} exact/>
            <Route path="/signup" component={Index} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password-link" component={ResetPasswordLink} />
        </Switch>
    )
};

export default Auth;