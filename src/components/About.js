import React, { Component, Fragment } from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import '../css/About.css';
import un from '../img/1.jpg';
import deux from '../img/5.jpeg';


class About extends Component {
  render() {
    return (
      <Fragment>
        <section className="infos">
          <div className="mt-5">
            <Zoom>{/*Using Zoom Effect*/}
                <img className='rounded-circle text-center' src={un} alt='un'/>
            </Zoom>
          </div>
          <div className="about rounded-circle text-center">
            <Zoom>{/*Using Zoom Effect*/}
              <div className="aboutCont">
                <h1 className="aboutTitle text-uppercase">About me</h1>
                <p>Je suis web développeur d'origine sudamericaine situé en Belgique; parlant espagnol, français et ayant des bonnes bases en anglais.
                Personne bien organisée, patiente, avec une grande attention aux détails.
                </p>
              </div>
            </Zoom>
          </div>
          <div className="mt-5">
            <Zoom>{/*Using Zoom Effect*/}
                <img className='rounded-circle text-center' src={deux} alt='deux'/>
            </Zoom>
          </div>
        </section>
        <div>
          
        </div>
        
      </Fragment>
    );
  }
}

export default About;