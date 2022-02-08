import _ from 'lodash';
import React from 'react';

// import './KeyPiano.css';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // active: false,
    };

    // this.toggleClass = this.toggleClass.bind(this);
  }
  // toggleClass = () => {
  //     const currentState = this.state.active;
  //     this.setState({ active: !currentState });
  // };

  // changeRecording = () => {
  //   //function that wraps two: the changing button 
  //   this.toggleClass();
  //   //and the parent state
  //   this.props.buttonClick();
  // }

  render() {
      return (
          <input type = "button" 
              className='button-play' 
              onClick={this.props.buttonClick()} />
      )
  }
}

export { PlayButton };