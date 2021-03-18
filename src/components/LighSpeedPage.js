// You can live edit this code below the import statements
import React from 'react';
import LightSpeed from 'react-reveal';

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
        <h1>
            <LightSpeed top opposite cascade collapse when={this.state.show}>
                <h2>Bonjour je m'appelle Zulma</h2>
            </LightSpeed>
            <button
                className="btn btn-outline-success mt-5"
                type="button"
                onClick={this.handleClick}
            >
                { this.state.show ? 'Hide' : 'Show' } Message
            </button>
        </h1>
    );
  }
}

export default LightSpeedPage;
