import _ from 'lodash';
import React from 'react';

import { SCALES } from '../Scales.js'


class Key extends React.Component {
  noteIsFlat = (note) => {
    return note.length > 2;
  }

  keyIsPressed = (note, pressedKeys) => {
    // return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    return _.includes(pressedKeys, SCALES[this.props.instrument][this.props.tuning]['NOTE_TO_KEY'][note]);
    
  }

  render() {
    let keyClassName = this.props.instrument + "key";
    const noteIsFlat = this.noteIsFlat(this.props.note);
    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);

    //this function checks if this note is currently being played
    //adds a pressed class if yes for renderi g idk
    
    if (noteIsFlat) 
      keyClassName += " flat";
    
    if (keyIsPressed) 
      keyClassName += " pressed";

    let key;
    
    if (noteIsFlat) 
      key = (
        <div className={keyClassName}>
          <div className={this.props.instrument + "key-text-flat"}>
            {SCALES[this.props.instrument][this.props.tuning]['NOTE_TO_KEY'][this.props.note].toUpperCase()  }
          </div>
        </div>); 
    
    else
      key = (
        <div className={keyClassName}>
          <div className={this.props.instrument + "key-text"}>
            {SCALES[this.props.instrument][this.props.tuning]['NOTE_TO_KEY'][this.props.note].toUpperCase()}
          </div>
        </div>
      );
    
    return key;
  }
}

export { Key };