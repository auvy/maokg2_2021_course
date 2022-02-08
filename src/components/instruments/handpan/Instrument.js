import _ from 'lodash';
import React from 'react';

import { SCALES } from '../Scales.js'
import { Key } from './Key.js'
 
let noteAmount = []
let noteAngles = []
let skew = 0
let textRotation = 0
let textSkew = 0

let circularNotes = []
let centerNote = ''

function generateAngles(noteAmount) {
  let arr = []

  let circularNotes = noteAmount - 1

  let angle = 0
  for (let i = 0; i < circularNotes; i++){
      angle = 360 / circularNotes * (i + 0.5) 

      angle = Math.round(angle * 10) / 10

      arr.push(angle)
  }
  // arr.push(0)

  return arr
}



class Handpan extends React.Component {

  //handpan has 5 divs in which buttons lie.
  //2 outer divs have 1 centered key
  //2 inner divs have 2 keys with margin
  //1 inner div has 2 keys on top and bottom


  render() {
    noteAmount = SCALES[this.props.instrument][this.props.tuning]['NOTES'].length
    noteAngles = generateAngles(noteAmount)
    skew = 360 / noteAmount 
    skew = Math.round(skew * 10) / 10

    textSkew = skew
    skew = -skew

    textRotation = Math.round(360 / noteAmount * (0.5) * 10) / 10  

    circularNotes = [...SCALES[this.props.instrument][this.props.tuning]['NOTES']]
    centerNote = circularNotes.pop()

    const keys = _.map(circularNotes, (note, index) => {
      return (
        <Key
          key={index}
          note={note}
          pressedKeys={this.props.pressedKeys}
          instrument={this.props.instrument}
          tuning={this.props.tuning}
          angle={noteAngles[index]}
          skew={skew}
          textSkew={textSkew}
          textRotation={textRotation}
          type={'circular'}
        />
      );
    });
    keys.push(
      <Key
          key={noteAmount - 1}
          note={centerNote}
          pressedKeys={this.props.pressedKeys}
          instrument={this.props.instrument}
          tuning={this.props.tuning}
          angle={'0'}
          skew={'0'}
          textSkew={'0'}
          textRotation={'0'}
          type={'center'}
        />
    )

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

export { Handpan }