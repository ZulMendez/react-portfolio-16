import React, { Fragment } from 'react';
// import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/ContactPage';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { MyProvider } from './components/Language';
import { MyContext } from './components/Language';
import About from './components/About';



function App() {
  return (
    <MyContext.Consumer>
      {(context) => (
    <Fragment>
      <MyProvider/>
      <Router>
        <Navigation />
        <Banner/>
        <About/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        <Redirect to='/contact' component={Contact} />
      </Router>
      <Footer/>
    </Fragment>
     )}
    </MyContext.Consumer>
  );
}

export default App;
