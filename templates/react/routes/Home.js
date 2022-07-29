import React from 'react';
import Logo from '../components/Logo';
import Webpack from '../components/Webpack';
// import { useHook } from './hooks/useCounter';
import style from './stylehome.module.css';

const Home = () => {
  // const { name } = useHook('Grecco');

  return (
    <div className={style.container}>
      <h1 className={style.h1}>This is My microfrontend React</h1>
      <div className={style.container2}>
        <Logo />
        <Webpack />
      </div>
    </div>
  );
};

export default Home;
