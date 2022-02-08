import _ from 'lodash';
import React from 'react';

import {} from './Styles.js'

// import { Piano } from './piano/Piano.js'

import { SCALES, LAYOUTS } from './Scales.js'

let timeNow = 0;
let recordedNotes = []

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],    //just pressed keys
      isRecording: false, //needed to start logging keys
      isSelected: false,
      instrument: 'piano',   //instrument type; loads styles and notes
      tuning: 'classic'


      //pressed keys are a part of state and are constantly renewing
      //if anything in state changes react automatically rerenders piano
      //like when any key added or removed a new array is passed
    };
  }

  //pass song to parent
  returnSong = () => {
    if (recordedNotes.length > 0){
      let song = {"path": "/public/notes/" + this.state.instrument + "/",
      "notes": recordedNotes}
      console.log(song)
      return song
    }
    else return undefined
  }

  //changes instrument, called from App by switch
  chooseInstrument = (instrument) => {
    this.setState({instrument: instrument})
    this.setState({tuning: 'classic'})
  }


  //changes instrument, called from App by switch
  chooseTuning = (instrument) => {
    this.setState({tuning: instrument})
  }


  //plays one note by getting ID of rendered DIV
  playNote = (note) => {
    //check if pressed key has mapping for note and is not some random key
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);

      noteAudio.play();
    }
  }

  //replays a recorded song
  playSong = () => {
    
    if (recordedNotes.length === 0) return

    recordedNotes.forEach((note, i) => {
      setTimeout(() => {
        if (i > 0){ 
          this.decolorKey(SCALES[this.state.instrument][this.state.tuning]['NOTE_TO_KEY'][recordedNotes[i-1].note])
        }
        this.colorPressedKey(SCALES[this.state.instrument][this.state.tuning]['NOTE_TO_KEY'][note.note])
        this.playNote(note.note)
      }, note.time)
    })
  }




  //record note is called only when state is recording
  //it should add the object (key, time) into array 
  
  //after the recording is stopped, the array of recorded notes immediately  
  recordNote = (key, start, end) => {
    let time = end - start
    console.log(key, time)
    // recordedNotes.push({note : KEY_TO_NOTE[key], time : time})
    recordedNotes.push({note : SCALES[this.state.instrument][this.state.tuning]['KEY_TO_NOTE'][key], time : time})

    
  }

  startRecording = () => {
    recordedNotes = []
    timeNow = Date.now();
    this.setState({isRecording: true });
    console.log(this.state.instrument + " recording started")
  }

  stopRecording = () => {
    timeNow = 0;
    this.setState({isRecording: false });
    console.log(this.state.instrument + " recording stopped")
  }

  interruptRecording = () => {
    recordedNotes = []
    timeNow = 0;
    this.setState({isRecording: false });
    console.log(this.state.instrument + " recording interrupted")
  }

  colorPressedKey = (key) => {
    const updatedPressedKeys = [...this.state.pressedKeys];
    //getting pressedKeys array from piano state
    if (!updatedPressedKeys.includes(key) 
      && SCALES[this.state.instrument][this.state.tuning]['VALID_KEYS'].includes(key)) {
    //checking if pressed key isn't already pressed
    //and if it's a valid key from note list
      updatedPressedKeys.push(key);
      //adding to pressedkeys array
    }

    this.setState({
      pressedKeys: updatedPressedKeys,
      //changing state to new array
    });
  }

  //when you press a key
  handleKeyDown = (event) => {

    if (event.repeat) {
      console.log("holding key " + event.key)
      return;
      //when you hold a key
    }
    const key = event.key;
    //only now you get a key that is pressed
    this.colorPressedKey(key)

    this.playNote(SCALES[this.state.instrument][this.state.tuning]['KEY_TO_NOTE'][key]);

    if (SCALES[this.state.instrument][this.state.tuning]['VALID_KEYS'].includes(key) && this.state.isRecording) 
      this.recordNote(key, timeNow, Date.now())
  }

  //runs when finger from pressed key is removed

  decolorKey = (key) =>
  {
    const index = this.state.pressedKeys.indexOf(key);
    //finding specific index of key that we remove finger from
    if (index > -1) {
      const updatedPressedKeys = [...this.state.pressedKeys]
      updatedPressedKeys.splice(index, 1)
      this.setState({
        pressedKeys: updatedPressedKeys
        //just removes the key and updates the state
      });
    }
  }

  handleKeyUp = (event) => {
    this.decolorKey(event.key)
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    //two listeners that launch after piano is rendered
    //when keydown we add it to pressed keys array
  }

  render() {
    const TagName = LAYOUTS[this.state.instrument]
    return (<TagName 
      instrument={this.state.instrument}
      tuning={this.state.tuning}
      pressedKeys={this.state.pressedKeys}
      />)
  }
}

export { Instrument };