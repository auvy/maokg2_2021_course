import _ from 'lodash';
import React from 'react';

import { SCALES } from '../Scales.js'
import { Key } from './Key.js'


let noteAmount = 0
let noteLengths = []
let notes = []

function noteIsFlat(note){
  return note.length > 2;
}


function generateLengths(noteAmount, notes) {
  let rightArr = []

  //generates from left to right

  let value = 0

  let increment = -1

  if (noteIsFlat(notes[0]))
    increment = 1

  for (let i = 0; i < noteAmount; i++){

    value = Math.ceil(
      28 + (( noteAmount - i + 1 ) * 22 / noteAmount)
      )
    if(noteIsFlat(notes[i])){
      value = rightArr[i + increment]
    }


    rightArr.push(value)
  }

  return rightArr
}



 
class Xylophone extends React.Component {


  render() {

    noteAmount = SCALES[this.props.instrument][this.props.tuning]['NOTES'].length
    notes = [...SCALES[this.props.instrument][this.props.tuning]['NOTES']]

    noteLengths = generateLengths(noteAmount, notes)

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

export { Xylophone }