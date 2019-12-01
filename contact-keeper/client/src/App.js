import React from 'react';
//router
import { Switch , Route } from 'react-router-dom';
//Comps.
import Nav from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Alerts from './components/layouts/Alerts';

//Styles
import './App.css';
//redux
import store from './store';
import { Provider } from 'react-redux';



const App = () => {
  return (
    <Provider store={store}>
      <>
        <Nav />
        <div className="container">
          <Alerts />
          <Switch>
            <Route exact path="/" render={ () => <Home /> } />
            <Route exact path="/about" render={ () => <About /> } />
            <Route exact path="/register" render={() => <Register /> }/>
            <Route exact path="/login" render={() => <Login /> }/>
            <Route component={Login}/>  
          </Switch>
        </div>
      </>
    </Provider>
  );
}

export default App;
