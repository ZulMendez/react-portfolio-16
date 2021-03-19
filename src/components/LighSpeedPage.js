// You can live edit this code below the import statements
import React from 'react';
import LightSpeed from 'react-reveal';
import '../css/LighSpeed.css';

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
        <div className="cont">
            <div>
              <video className='videoAbout' src="/videos/video8.mp4" autoPlay loop muted />
            </div>
            <div className="aboutAnimat text-center text-white">
              <LightSpeed top opposite cascade collapse when={this.state.show}>
                  <h2 className="presentat">Je suis web développeur d'origine sudamericaine situé en Belgique; parlant espagnol, français et des bonnes bases en anglais. Personne bien organisée, patiente, avec une grande attention aux détails. Fan de cuisine, musique, films et littérature. Intéressée de travailler sur des projets ambitieux avec des personnes positives</h2>
              </LightSpeed>
              <button
                  className="btn btn-outline-primary mt-5"
                  type="button"
                  onClick={this.handleClick}
              >
                  { this.state.show ? 'Hide Message' : 'ABOUT ME' } 
              </button>
            </div>
        </div>
    );
  }
}

export default LightSpeedPage;
