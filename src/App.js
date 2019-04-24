import React from 'react';
import { Route } from 'react-router';
import logo from './logo.svg';
import './App.css';

import Results from './Results/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Route path="/results/:pc/:env/:startTime/:endTime" component={Results} />
    </div>
  );
}

export default App;
