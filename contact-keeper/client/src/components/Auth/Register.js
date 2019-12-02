import React , { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';
//Redux
import { useDispatch , useSelector } from "react-redux";
import { SET_ALERT , REMOVE_ALERT, REGISTER_SUCCESS, REGISTER_FAIL } from '../../actions/types';


const Register = () => {
  const [ user , setUser ] = useState({
    name: '' ,
    email: '' ,
    password: '' ,
    password2: ''
  });
  const { name , email , password , password2 } = user;

  const dispatch = useDispatch();
  const msg = useSelector(state => state.db.error);
  //On Change
  const handleChange = e => {
    setUser({
      ...user ,
      [e.target.name] : e.target.value
    });
  }
  //ON Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let id;
    //UI
    if( password !== password2 ){
      id = uuid.v4();
      let msg = 'Passwords don\'t match';
      dispatch({
        type: SET_ALERT,
        payload: { id , SET_ALERT , msg , tipo: 'danger'}
      })
      setTimeout( () => dispatch({ type: REMOVE_ALERT , payload: id}), 3000);
    }
    else{
      //BackEND
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const res = await axios.post( 'http://localhost:5000/api/users' , {name , email , password} , config )
        dispatch({
          type: REGISTER_SUCCESS ,
          payload: res.data
        });
      } 
      catch (error) {
        dispatch({
          type: REGISTER_FAIL ,
          payload: error.response.data.msg
        })
        id = uuid.v4();
        dispatch({
          type: SET_ALERT,
          payload: { id , SET_ALERT , msg , tipo: 'danger'}
        })
        setTimeout( () => dispatch({ type: REMOVE_ALERT , payload: id}), 2500);
      }
    }
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

export default Register;
