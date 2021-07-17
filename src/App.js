import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Gallery from './pages/Gallery';
import Contact from './pages/ContactPage';
import { MyProvider } from './components/Language';
import { MyContext } from './components/Language';

function App() {
  return (
    <MyContext.Consumer>
      {(context) => (
    <Fragment>
      <MyProvider/>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/gallery'component={Gallery}/>
          <Route path='/skills' component={Skills}/>
          <Route exact path='/contact' component={Contact}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
    </Fragment>
      )}
    </MyContext.Consumer>
  );
}

export default App;
