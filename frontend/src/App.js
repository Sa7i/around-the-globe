import './App.css';
import Login from './components/Login/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SelectGame from './components/SelectGame/SelectGame';

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/select" element={<SelectGame />} />
      </Routes>
      {/* <Login /> */}
      
    </div>
  );
}

export default App;
