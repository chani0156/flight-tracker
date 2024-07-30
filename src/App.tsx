import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlightList from './components/FlightList';

function App() {
  return (
    <div className="App">
    <h1>Flight Tracker</h1>
    <FlightList />
  </div>
  );
}

export default App;
