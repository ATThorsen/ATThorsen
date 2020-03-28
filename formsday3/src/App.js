
import React from 'react';
import './App.css';
import FormDemo from './FormDemo.js';
import ReservationForm from './FormDemoMultiple.js';

function App() {
  return (
    <div className="App">
      <h2>Forms and Controlled Components</h2><br/>
      <h3>Opgave 1</h3>
      <FormDemo/>
      <br/>
      <h3>Opgave 2</h3>
      <ReservationForm/>
    </div>
  );
}

export default App;