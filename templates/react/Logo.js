import React from 'react';
import logo from '../assets/logo.svg';
import style from './stylelogo.module.css';
const Logo = () => {
  return (
        <img className={style.AppLogo} src={logo} alt='logo'/>
  );
};

export default Logo;
