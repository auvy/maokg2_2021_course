import _ from 'lodash';
import React from 'react';

import { SCALES } from '../Scales.js'
import { Key } from './Key.js'
 
let noteAmount = []
let noteLengths = []

function isOdd(num) { return num % 2;}

function generateLengths(noteAmount) {
  let leftArr = []
  let rightArr = []

  let value = 0
  for (let i = 0; i < noteAmount; i++){
    value = Math.ceil(50 + ((i+1) * 50 / noteAmount))

    if (isOdd(noteAmount - i)){
      rightArr.push(value)
    }
    else{
      leftArr.push(value)
    }

  }
  let reversed = rightArr.reverse()

  let whole = leftArr.concat(reversed)

  return whole
}

class Kalimba extends React.Component {



  render() {
    noteAmount = SCALES[this.props.instrument][this.props.tuning]['NOTES'].length
    noteLengths = generateLengths(noteAmount)
    
    const keys = _.map(SCALES[this.props.instrument][this.props.tuning]['NOTES'], (note, index) => {
      return (
        <Key
          key={index}
          note={note}
          pressedKeys={this.props.pressedKeys}
          instrument={this.props.instrument}
          tuning={this.props.tuning}
          height={noteLengths[index]}
          margin={100 - noteLengths[index]}
        />
      );
    });

    const audioFiles = _.map(SCALES[this.props.instrument][this.props.tuning]['NOTES'], (note, index) => {
      return (
        <audio
          id={note}
          key={index}
          src={`../../../notes/${this.props.instrument}/${note}.mp3`}
        />
      );
    });

    return (
        <div className={this.props.instrument}>
          {keys}
          {audioFiles}
        </div>

    );

  }
}

export { Kalimba }