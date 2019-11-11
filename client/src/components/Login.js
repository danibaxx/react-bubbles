import React, { useState } from "react";
import axiosWithAuth from '../utilities/axiosWithAuth';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [error, setError] = useState()
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/login', data)
      .then(result => {
        localStorage.setItem('payload', result.data.payload)
        props.history.push('/bubblepage')
      })
      .catch(err => {
        setError(err.result.data)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className='error'>{error}</div>}

        <input 
          type='text' 
          name='username' 
          placeholder='Username'
          value={data.username}
          onChange={handleChange} 
        />
        <input 
          type='password' 
          name='password' 
          placeholder='Password'
          value={data.password}
          onChange={handleChange}  
        />

        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
