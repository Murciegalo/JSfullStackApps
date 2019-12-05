import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaIdCard  , FaSignOutAlt } from 'react-icons/fa';
//redux
import { connect } from 'react-redux';
import { logOut } from '../../actions/dbActions';

const Navbar = ({ title , icon , isAuthenticated , user , logOut }) => {
  const handleClick = () => {
    logOut();
  }
  return (
    <nav className="navbar bg-primary">
      <h1>
        {icon} {title}
      </h1>
      <ul>
        {isAuthenticated && <> 
          <li><Link to="/">Home | {user !== null ? user.name : ''}</Link></li>
          <li><Link to="/about">About</Link></li> 
          </>
        }
        <li>
          {!isAuthenticated && <Link to="/register">Register</Link>}
        </li>
        <li>
          {isAuthenticated ? 
            <Link to="/login" onClick={handleClick}>Log Out <FaSignOutAlt /></Link> 
            :
            <Link to="/login">Login</Link>
          }
        </li>
      </ul>
    </nav>
  )
} 

Navbar.propTypes = {
  title: PropTypes.string.isRequired ,
  icon: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired, 
}

Navbar.defaultProps = {
  title: 'Cloud Contacts Storage' ,
  icon: <FaIdCard />
} 

const mapStateToProps = state => {
  return state.db;
}
export default connect(
  mapStateToProps ,
  { logOut }
)(Navbar);