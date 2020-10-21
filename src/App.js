import React from 'react';
import logo from './logo.svg';
import './App.css';

import Federico from './Components/Federico/Federico'
import ClassComponent from './Components/ClassComponent/ClassComponent'
import FxComponent from './Components/FxComponent/FxComponent'

function App() {

  const appID = "PracticeApp";

  return (
    <div className="App">
      <header className="App-header">


        <FxComponent />

        <ClassComponent applicationID={appID} />

      </header>
    </div>
  );
}

export default App;
