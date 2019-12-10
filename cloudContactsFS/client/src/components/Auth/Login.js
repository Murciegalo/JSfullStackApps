import React , { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
//Redux
import { setAlert } from '../../actions/contactsActions';
import { clearErrors } from '../../actions/dbActions';
import { connect } from 'react-redux';
import { loadUser , login } from '../../actions/dbActions';

const Login = ({ history , isAuthenticated , error , clearErrors , setAlert , login , loadUser }) => {
  useEffect(() => {
    if(isAuthenticated) {
      history.push('/')
    }  
    if(error === 'Invalid Credentials'){
      setAlert(error);
      clearErrors();
    }
  }, //eslint-disable-next-line
  [ isAuthenticated , history , error ]);

  const [ user , setUser ] = useState({
    email: '' ,
    password: ''
  });
  const { email , password } = user;
  //OnChange
  const handleChange = e => {
    setUser({ ...user , [e.target.name] : e.target.value });
  }
  //On Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    login( {email , password} ).then( loadUser() );
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
            onChange={handleChange} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
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
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.string,
  clearErrors: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
  return state.db
}
export default connect(
  mapStateToProps ,
  { setAlert , clearErrors , login , loadUser }
)(Login);
