import React , { useState } from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  console.log(props)
  const [ user , setUser ] = useState({
    email: '' ,
    password: ''
  });
  const { email , password } = user;
  //OnChange
  const handleChange = e => {
    setUser({ [e.target.name] : e.target.value });
  }
  //On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <div className="form-container">
      <h1>Account <span className="text-primary">Login</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={handleChange} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={handleChange} 
            required
          />
        </div>
        <input type="submit" value="Login" className="btn btn-success btn-block"/>
      </form>
    </div>
  )
}

Login.propTypes = {
}

export default Login;
