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
                  <div className='skills'>
                    <h2 className="presentat"> HTML </h2>
                    <h2 className="presentat"> CSS </h2>
                    <h2 className="presentat"> GIT </h2>
                    <h2 className="presentat"> SASS </h2>
                    <h2 className="presentat"> BOOTSTRAP </h2>
                    <h2 className="presentat"> JAVASCRIPT </h2>
                    <h2 className="presentat"> REACT </h2>
                    <h2 className="presentat"> LARAVEL </h2>

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
    );
  }
}

export default LightSpeedPage;
