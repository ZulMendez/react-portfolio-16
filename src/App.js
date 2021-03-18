import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/ContactPage';
function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        <Redirect to='/contact' component={Contact} />
      </Router>
    </Fragment>
  );
}

export default App;
