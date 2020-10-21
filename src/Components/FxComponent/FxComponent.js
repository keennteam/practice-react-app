import React, {useState} from 'react';

// custom component imports
import GithubProfileCard from '../GithubProfileCard/GithubProfileCard'



const FxComponent = (props) => {

  //state variables
  const [githubData, setGithubData] = useState(null);
  const [githubUser, setGithubUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  //FUNCTIONS
  // handle the input of the text field
  const _handleInputChange = (e) => {
    console.log("you typed", e.target.value)
    setGithubUser(e.target.value)
  }

  //handles the click of the mouse on the button
  const _handleClickBtn = async () => {
    setGithubData(null)
    console.log("button click, gotta call API", githubUser);
    setIsLoading(true)
    const response = await fetch(`https://api.github.com/users/${githubUser}`)
    const data = await response.json()
    setGithubData(data)
    setIsLoading(false)
  }

  // render
  return (
    <div>
      <h1>Function Component</h1>
      <h2>Github Profile checker</h2>
      <p>Insert your github username</p>
      <input onChange={(e) => _handleInputChange(e)} type="text" />
      <button onClick={() => _handleClickBtn()}>Submit</button>
      <hr />
      <GithubProfileCard user={githubUser} loading={isLoading} data={githubData} />
    </div>
  );

}

export default FxComponent;
