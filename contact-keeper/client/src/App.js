import React from 'react';
//router
import { Switch , Route } from 'react-router-dom';
//Comps.
import Nav from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
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
          <Switch>
            <Route exact path="/" render={ () => <Home /> } />
            <Route exact path="/about" render={ () => <About /> } />
          </Switch>
        </div>
      </>
    </Provider>
  );
}

export default App;
