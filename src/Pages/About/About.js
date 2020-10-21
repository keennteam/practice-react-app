import React from 'react';
import {Link} from 'react-router-dom';

//custom components

//main component
function About() {

  return (
    <div>
      <p>We build software!</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default About;
