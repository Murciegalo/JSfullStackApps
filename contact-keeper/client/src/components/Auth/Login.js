import React , { useState } from 'react';
import PropTypes from 'prop-types';

const Login = props => {
  const [ user , setUser ] = useState({
    email: '' ,
    password: '' ,
    password2: ''
  });
  const { email , password } = user;

  const handleChange = e => {
    setUser({
      ...user ,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted');
  }

  return (
    <div className="form-container">
      <h1>Account <span className="text-primary">Login</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={handleChange}/>
        </div>
        <input type="submit" value="Login" className="btn btn-success btn-block"/>
      </form>
    </div>
  )
}

Login.propTypes = {

}

export default Login;
