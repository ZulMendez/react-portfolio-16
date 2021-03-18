import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import Footer from './components/Footer';
import Banner from './components/Banner';


function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Banner/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        <Redirect to='/contact' component={Contact} />
      </Router>
      <Footer/>
    </Fragment>
  );
}

export default App;
