import React , { useState } from 'react';
import uuid from 'uuid';
//Redux
import { useDispatch } from "react-redux";
import { SET_ALERT , REMOVE_ALERT } from '../../actions/types';
import Alerts from '../layouts/Alerts';

const Login = props => {
  const [ user , setUser ] = useState({
    email: '' ,
    password: '' ,
    password2: ''
  });
  const { email , password } = user;

  const dispatch = useDispatch();

  //OnChange
  const handleChange = e => {
    setUser({
      ...user ,
      [e.target.name] : e.target.value
    });
  }
  //On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let msg;
    let id = uuid.v4();
    if( email === '' || password === ''){
      msg = 'Please complete all fields';
      dispatch({
        type: SET_ALERT,
        payload: { id , SET_ALERT , msg , tipo: 'danger'}
      });
    }
    // else if( password !== password2 ){
    //   msg = 'Passwords don\'t match';
    //   dispatch({
    //     type: SET_ALERT,
    //     payload: { id , SET_ALERT , msg , tipo: 'danger'}
    //   })
    // }
    setTimeout( () => dispatch({ type: REMOVE_ALERT , payload: id}), 3000);
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
