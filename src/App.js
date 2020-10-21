import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// app pages
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

//custom components
import FxComponent from './Components/FxComponent/FxComponent'

//styles and multimedia
import './App.css';

//main component
function App() {

  console.log(window.location);

  return (
    <Router>
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
        </Switch>

      </header>
    </div>
    </Router>
  );
}

export default App;
