import React, { Component, Fragment } from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import '../css/About.css';
import LightSpeedPage from './LighSpeedPage';


class About extends Component {
  render() {
    return (
      <Fragment>
        <section className="infos">
          <div className="about rounded-circle text-center">
            <Zoom>{/*Using Zoom Effect*/}
              <div className="aboutCont">
                <h1 className="aboutTitle">About me</h1>
                <p>bonjour je m appelle Zulma, je suis web developer</p>
              </div>
            </Zoom>
          </div>
          <div className="about rounded-circle text-center">
            <Zoom>{/*Using Zoom Effect*/}
              <div className="aboutCont">
                <h1 className="aboutTitle">About me</h1>
                <p>bonjour je m appelle Zulma, je suis web developer</p>
              </div>
            </Zoom>
          </div>
          <div className="about rounded-circle text-center">
            <Zoom>{/*Using Zoom Effect*/}
              <div className="aboutCont">
                <h1 className="aboutTitle">About me</h1>
                <p>bonjour je m appelle Zulma, je suis web developer</p>
              </div>
            </Zoom>
          </div>
        </section>
        <div>
          <LightSpeedPage/>
        </div>
        
      </Fragment>
    );
  }
}

export default About;