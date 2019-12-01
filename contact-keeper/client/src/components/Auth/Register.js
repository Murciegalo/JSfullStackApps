import React , { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
//Redux
import { useDispatch } from "react-redux";
import { SET_ALERT , REMOVE_ALERT } from '../../actions/types';


const Register = () => {
  const [ user , setUser ] = useState({
    name: '' ,
    email: '' ,
    password: '' ,
    password2: ''
  });
  const { name , email , password , password2 } = user;

  const dispatch = useDispatch();
  
  //On Change
  const handleChange = e => {
    setUser({
      ...user ,
      [e.target.name] : e.target.value
    });
  }
  //ON Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let msg ,id;
    // // let id = uuid.v4();
    // if( name === '' || email === '' || password === ''){
    //   id = uuid.v4();
    //   msg = 'Please complete all fields';
    //   dispatch({
    //     type: SET_ALERT,
    //     payload: { id , SET_ALERT , msg , tipo: 'danger'}
    //   });
    // }
    if( password !== password2 ){
      id = uuid.v4();
      msg = 'Passwords don\'t match';
      dispatch({
        type: SET_ALERT,
        payload: { id , SET_ALERT , msg , tipo: 'danger'}
      })
    }
    setTimeout( () => dispatch({ type: REMOVE_ALERT , payload: id}), 3000);
  }
  return (
    <>
    <div className="form-container">
      <h1>Account <span className="text-primary">Register</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            required
            value={name} 
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            name="email" 
            required
            value={email} 
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password"
            minLength="6" 
            required
            value={password} 
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input 
            type="password" 
            name="password2" 
            minLength="6" 
            required
            value={password2} 
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Register" className="btn btn-success btn-block"/>
      </form>
    </div>
    </>
  )
}

Register.propTypes = {

}

export default Register;
