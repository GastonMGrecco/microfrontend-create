import React from 'react';
import logo from '../assets/logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counter/counterSlice';
import style from './stylelogo.module.css';

const Logo = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className={style.logoContainer}>
      <img className={style.AppLogo} src={logo} alt='logo' />
      <div className={style.buttons}>
        <div className={style.addless}>
          <button onClick={() => dispatch(increment())}>+</button>
          <button type='input'>{counter}</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
};

export default Logo;
