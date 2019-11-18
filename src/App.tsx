import React from 'react';
import './styles/App.scss';
import {i18n} from "i18next";
import {useTranslation} from "react-i18next";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./views/Sign-Up/index";

const App: React.FC = () => {

  const { t, i18n } = useTranslation();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang)
  };

  return (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Index} exact={true}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
};

export default App;
