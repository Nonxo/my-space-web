import React from 'react';
import './styles/App.scss';
import {i18n} from "i18next";
import {useTranslation} from "react-i18next";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "./views/Sign-Up";
import SignIn from "./views/Sign-In";
import ForgotPassword from "./views/forgot-password";

const App: React.FC = () => {

  const { t, i18n } = useTranslation();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang)
  };

  return (
    <BrowserRouter>
        <div>
            <Switch>
                <Redirect from="/" to="/login" exact/>
                <Route path="/" component={Index} exact/>
                <Route path="/login" component={SignIn} exact/>
                <Route path="/signup" component={Index} exact/>
                <Route path="/forgot-password" component={ForgotPassword} exact/>
            </Switch>
        </div>
    </BrowserRouter>
  );
};

export default App;
