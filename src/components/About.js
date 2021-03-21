import React, { Component, Fragment } from 'react';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import '../css/About.css';
import un from '../img/2.jpg';
// import hello from '../img/hello.png';
// import responsive from '../img/responsive.png';
import web from '../img/webWoman.png';


class About extends Component {
  render() {
    return (
      <Fragment>
        <section className="infos">
          <div className="mt-5">
            <Zoom>{/*Using Zoom Effect*/}
                <img className='imgAbout rounded-circle text-center' src={un} alt='un'/>
            </Zoom>
          </div>
          <div className="about rounded-circle text-center">
            <Zoom>{/*Using Zoom Effect*/}
              <div className="aboutCont">
                <h1 className="aboutTitle text-uppercase">A propos</h1>
                <p>Je suis web développeur d'origine sudamericaine situé en Belgique; parlant espagnol, français et ayant des bonnes bases en anglais.
                Personne bien organisée, patiente, avec une grande attention aux détails.
                </p>
              </div>
            </Zoom>
          </div>
          <div className="mt-5">
            <Zoom>{/*Using Zoom Effect*/}
                <img className='imgAbout rounded-circle text-center' src={web} alt='deux'/>
            </Zoom>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;