import _ from 'lodash';
import React from 'react';

import { SCALES } from '../Scales.js'


class Key extends React.Component {

  keyIsPressed = (note, pressedKeys) => {
    // return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    return _.includes(pressedKeys, SCALES[this.props.instrument][this.props.tuning]['NOTE_TO_KEY'][note]);
    
  }

  render() {
    let keyClassName = this.props.instrument + "key";
    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);

    //this function checks if this note is currently being played
    //adds a pressed class if yes for renderi g idk

    
    if (keyIsPressed) 
      keyClassName += " pressed";

    let key;
    
    let text1 = this.props.note.toUpperCase()
    let text2 = SCALES[this.props.instrument][this.props.tuning]['NOTE_TO_KEY'][this.props.note].toUpperCase()

    
    key = (
      <div className={keyClassName}>
        <div className={this.props.instrument + "key-note"}>
          {text1}
        </div>
        <div className={this.props.instrument + "key-text"}>
          {text2}
        </div>
      </div>
    );
    
    return key;
  }
}

export { Key };