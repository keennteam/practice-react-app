import React from 'react';

const FxComponent = (props) => {

  const { user, data, loading } = props

  if (!data) {
    return (
      <p>No data yet</p>
    )
  }

  if (loading) {
    return (
      <p>LOADING</p>
    )
  }

  return (
    <div>
      <p>User: {user}</p>
      <p>ID: {data.company}</p>
      <p>company: {data.id}</p>
      <img src={data.avatar_url} />
    </div>
  )
}

export default FxComponent;
