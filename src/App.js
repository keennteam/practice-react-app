import React from 'react';
import logo from './logo.svg';
import './App.css';

import FxComponent from './Components/FxComponent/FxComponent'

function App() {

  console.log(window.location);

  return (
    <div className="App">
      <header className="App-header">

        <FxComponent />


      </header>
    </div>
  );
}

export default App;
