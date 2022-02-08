import React from 'react';

// import './KeyPiano.css';

class RecordButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false,
    };

    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass = () => {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  changeRecording = () => {
    //function that wraps two: the changing button 
    this.toggleClass();
    //and the parent state
    this.props.buttonClick();
  }

  render() {
      return (
          <input type = "button" 
              className={this.props.recording ? 'button-record recording': 'button-record'} 
              onClick={this.changeRecording} />
      )
  }
}

export { RecordButton };