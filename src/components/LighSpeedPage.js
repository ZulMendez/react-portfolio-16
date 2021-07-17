import React, { Fragment } from 'react';
import LightSpeed from 'react-reveal';
import '../css/LighSpeed.css';
import html from '../img/html.png';
import css from '../img/css.png';
import sass from '../img/sass.png';
import bootstrap from '../img/bootstrap-logo.png';
import git from '../img/git.png';
import github from '../img/github.png';
import js from '../img/Js.png';
import nodejs from '../img/nodejs.png';
import react from '../img/reactjs.png';
import laravel from '../img/laravel.png';
import bash from '../img/bash.png';
import trello from '../img/trello.jpg';


class LightSpeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <Fragment>
        <div className="cont">
            <div>
              <video className='videoAbout' src="/videos/video8.mp4" autoPlay loop muted />
            </div>
            <div className="aboutAnimat text-center text-white">
              <LightSpeed top opposite cascade collapse when={this.state.show}>
                  <div className='skills'>
                    <img data-aos='fade-right' src={html} className="img"/>
                    <img data-aos='fade-right' src={css} className="img"/>
                    <img data-aos='fade-right' src={sass} className="img"/>
                    <img data-aos='fade-right' src={bootstrap} className="img"/>
                    <img data-aos='fade-right' src={git} className="img"/>
                    <img data-aos='fade-right' src={github} className="img"/>
                    <img data-aos='fade-right' src={js} className="img"/>
                    <img data-aos='fade-right' src={nodejs} className="img"/>
                    <img data-aos='fade-right' src={react} className="img"/>
                    <img data-aos='fade-right' src={laravel} className="img"/>
                    <img data-aos='fade-right' src={bash} className="img"/>
                    <img data-aos='fade-right' src={trello} className="img"/>
                  </div>
              </LightSpeed>
              <button
                  className="btnSkills btn-outline-white mt-5"
                  type="button"
                  onClick={this.handleClick}
              >
                  { this.state.show ? 'BACK' : 'SKILLS' } 
              </button>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default LightSpeedPage;