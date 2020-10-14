import React, {useState} from 'react';


const FxComponent = (props) => {

  const [githubData, setGithubData] = useState({});



  // render function
  return (
    <div>
      <h1>Function Component ------</h1>
      <p>{name}</p>
    </div>
  );

}

export default FxComponent;
