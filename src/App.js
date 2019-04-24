import React from 'react';
import { Route } from 'react-router-dom';

import logoReact from './logo.svg';
import logo from './helios-UXPerformance-inline.svg';
import './App.css';

import Results from './Results/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoReact} className="React-logo" alt="React Logo" />
      </header>

      <Route path="/results/:pc/:env/:startTime/:endTime" component={Results} />
    </div>
  );
}

export default App;
