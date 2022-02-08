import _ from 'lodash';
import React from 'react';

import { SCALES } from '../Scales.js'
import { Key } from './Key.js'
 
class Lyre extends React.Component {
  render() {
    const keys = _.map(SCALES[this.props.instrument][this.props.tuning]['NOTES'], (note, index) => {
      return (
        <Key
          key={index}
          note={note}
          pressedKeys={this.props.pressedKeys}
          instrument={this.props.instrument}
          tuning={this.props.tuning}
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

export { Lyre }