import React from 'react';
import Logo from './components/Logo';

import style from './style.module.css';

const App = () => {
  return (
      <div className={style.myclass}>
        <h1 className={style.h1}>This is My microfrontend React</h1>
        <Logo />
      </div>
  );
};

export default App;