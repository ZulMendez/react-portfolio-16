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
                  <div className=''>
                    <h2 className="presentat"> HTML </h2>
                    <h2 className="presentat"> CSS </h2>
                    <h2 className="presentat"> SASS </h2>
                    <h2 className="presentat"> GIT</h2>
                    <h2 className="presentat"> JAVASCRIPT </h2>
                    <h2 className="presentat"> REACT </h2>
                    <h2 className="presentat"> LARABEL </h2>

                  </div>
              </LightSpeed>
              <button
                  className="btn btn-outline-primary mt-5"
                  type="button"
                  onClick={this.handleClick}
              >
                  { this.state.show ? 'Hide Message' : 'SKILLS' } 
              </button>
            </div>
        </div>
    );
  }
}

export default LightSpeedPage;
