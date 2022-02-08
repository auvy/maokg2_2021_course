import _ from 'lodash';
import React from 'react';

import { SCALES } from '../Scales.js'


class Key extends React.Component {

  keyIsPressed = (note, pressedKeys) => {
    // return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    return _.includes(pressedKeys, SCALES[this.props.instrument][this.props.tuning]['NOTE_TO_KEY'][note]);
    
  }

  render() {
    let pseudokeyClassName = this.props.instrument + "dummy";
    let dummyCorrectorName = this.props.instrument + "correction"
    let keyClassName = this.props.instrument + "key";
    let textClassName = this.props.instrument + "key-text"

    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);

    //this function checks if this note is currently being played
    //adds a pressed class if yes for renderi g idk
    
    if (keyIsPressed) 
      keyClassName += " pressed";

    let key;
    
    let style = {
      "--key-rotation": this.props.angle + "deg",
      "--key-skew": this.props.skew + 'deg'
    }

    let styleText = {
      "--text-rotation": this.props.textRotation + "deg",
      "--text-skew": this.props.textSkew + 'deg'
    }

    if (this.props.type === 'center'){
      pseudokeyClassName += ' centered'
      dummyCorrectorName += ' centered'
      keyClassName += ' centered'
      textClassName += ' centered'
    }

    let text = SCALES[this.props.instrument][this.props.tuning]['NOTE_TO_KEY'][this.props.note].toUpperCase() + '\r\n' + this.props.note.toUpperCase()


    key = (
      <div className={pseudokeyClassName} style={style}>

        <div className={dummyCorrectorName} style={styleText}>

          <div className={keyClassName}>

            <div className={textClassName} style={styleText}>
                {text}
            </div>
            
          </div>

        </div>


      </div>
    );
    
    return key;
  }
}

export { Key };