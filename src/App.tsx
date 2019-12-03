import React from 'react';
import './styles/App.scss';
import {i18n} from "i18next";
import {useTranslation} from "react-i18next";
import {Switch, Route} from "react-router-dom";
import Auth from "./layouts/Auth";
import Portal from "./layouts/Portal";

const App = () => {

  const { t, i18n } = useTranslation();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang)
  };

  return (
        <Switch>
            <Route path="/app" component={Portal} />
            <Route path="/" component={Auth} />
        </Switch>
  );
};

export default App;
