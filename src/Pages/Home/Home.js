import React from 'react';
import {
  Link
} from 'react-router-dom';

//custom components
import FxComponent from '../../Components/FxComponent/FxComponent'

//main component
function Home() {

  return (
    <div>
      <p>LINKS:</p>
      <Link to="/about">About</Link>
      <FxComponent />
    </div>
  );
}

export default Home;
