import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
// import { useHook } from './hooks/useHook';
import './style.module.css';

const App = () => {
  // const { name } = useHook('name');

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
