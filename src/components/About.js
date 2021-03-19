import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect


class About extends Component {
  render() {
    return (
      <div className="App bg-success rounded-circle text-center">
        <Zoom>{/*Using Zoom Effect*/}
          <header className="App-header">
    
            <h1 className="App-title text-white">About me</h1>
            <p>bonjour je m appelle Zulma, je suis web developer</p>
          </header>
        </Zoom>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
      </div>
    );
  }
}

export default About;