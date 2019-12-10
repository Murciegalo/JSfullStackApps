import React from 'react';
import { Route , Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({component: Component , ...rest}) {
  const isAuthenticated = useSelector(state => state.db.isAuthenticated);
  const loading = useSelector(state => state.db.loading);
  console.log(isAuthenticated , loading);

  return (
    <Route 
      {...rest} 
      render={ props => !isAuthenticated && !loading ? 
      <Redirect to="/login" />
      :
      <Component {...props} />
      }
    />
  )
}
