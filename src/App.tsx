import React from 'react';
import logo from './logo.svg';
import './App.css';
import {i18n} from "i18next";
import {useTranslation} from "react-i18next";

const App: React.FC = () => {

  const { t, i18n } = useTranslation();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang)
  };

  return (
    <div className="App">
      <nav style={{width: '100%', padding:'2rem, 0', backgroundColor: 'gray'}}>
        <button onClick={() => handleClick('en')}>English</button>
        <button onClick={() => handleClick('fr')}>French</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('Thanks')}
        </p>

        <p>
          {t('Why')}
        </p>
      </header>
    </div>
  );
};

export default App;
