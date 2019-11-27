import React from 'react';
//router
import { Switch , Route } from 'react-router-dom';
//Comps.
import Nav from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
//Styles
import './App.css';


const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </>
  );
}

export default App;
