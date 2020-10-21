import React, {useState} from 'react';


const FxComponent = (props) => {

  //state variables
  const [githubData, setGithubData] = useState(null);
  const [githubUser, setGithubUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  // functions
  const displayProfileInfo = () => {
    if (!githubData) {
      return (
        <p>no data to display</p>
      )
    }

    if (isLoading === true) {
      return (
        <p>LOADING...</p>
      )
    }

    console.log(githubData);

    return (
      <div>
        <p>User: {githubUser}</p>
        <p>ID: {githubData.company}</p>
        <p>company: {githubData.id}</p>
        <img src={githubData.avatar_url} />
      </div>
    )

  }

  const _handleInputChange = (e) => {
    console.log("you typed", e.target.value)
    setGithubUser(e.target.value)
  }

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
      {displayProfileInfo()}
    </div>
  );

}

export default FxComponent;
