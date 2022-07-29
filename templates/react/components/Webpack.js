import React from 'react';
import style from './stylewebpack.module.css';

const Webpack = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div className={style.container}>
        <p
          id={style.ptop}
          style={{ color: 'white', fontSize: '30px', marginBottom: '50px', textAlign: 'center' }}
        >
          Webpack 5
        </p>
        <div className={style.containerCubo}>
          <div className={style.cube}>
            <div className={style.cube_inner}>
              <div className={style.front}></div>
              <div className={style.back}></div>
              <div className={style.left}></div>
              <div className={style.right}></div>
              <div className={style.top}></div>
              <div className={style.bottom}></div>
            </div>
            <div className={style.cube_outer}>
              <div className={style.front}></div>
              <div className={style.back}></div>
              <div className={style.left}></div>
              <div className={style.right}></div>
              <div className={style.top}></div>
              <div className={style.bottom}></div>
            </div>
          </div>
        </div>

        <p
          id={style.pbottom}
          style={{ color: 'white', fontSize: '30px', marginTop: '50px', textAlign: 'center' }}
        >
          ModuleFederationPlugin
        </p>
      </div>
    </div>
  );
};

export default Webpack;
