import './App.css';
import Login from './components/Login/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SelectGame from './components/SelectGame/SelectGame';
import CountriesGame from './components/CountriesGame/CountriesGame';
import CapitalsGame from './components/CapitalsGame/CapitalsGame';
import TimeAttack from './components/TimeAttack/TimeAttack';

function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/select" element={<SelectGame />} />
        <Route path='countries-quiz' element={<CountriesGame />} />
        <Route path='/capitals-quiz' element={<CapitalsGame />} />
        <Route path='/time-attack' element={<TimeAttack />} />
      </Routes>
    </div>
  );
}

export default App;
