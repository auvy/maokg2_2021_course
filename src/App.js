import './App.css';
import "./components/buttons/Buttons.css"

import { Instrument } from './components/instruments/Instrument.js';

// import React, { useEffect, useState } from 'react';
import React from 'react'
import Select from "react-select"
// import styled from 'styled-components';

import axios from 'axios'

import { RecordButton } from './components/buttons/RecordButton.js'

import { SCALES  } from './components/instruments/Scales';


function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

//generates an array of objects like
//{value: 'piano', label: 'Piano'}
//from object fields
function generateEntries (options){
  options.forEach((element, index, array) => {
    let newVal = {value: element, label: capitalize(element)}
    array[index] = newVal
  });
}

let options = Object.keys(SCALES)
generateEntries(options)


let tuningOptions = []


const selectStyle ={
  // Fixes the overlapping problem of the component
  menu: provided => ({ ...provided, zIndex: 3, color: "black" })
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: options[0],
      selectedTuning: { value: "classic", label: "Classic"},
      isRecordingInstrument: false,
      data: null
    };

    this.changeInstrument = this.changeInstrument.bind(this);
    this.changeRecordingState = this.changeRecordingState.bind(this)

    this.InstrumentElement = React.createRef();
  }
  
  saveSong = (sheet) => {
    // console.log(sheet)
    axios.post('/songs', { songNotes: sheet }).then(res => {
      console.log(res)
    })
  }

  downloadFile = () => {
    axios.get('/download', {responseType: 'blob'})
    .then(res => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'recording.mp3');
      document.body.appendChild(link);
      link.click();
  })
  .catch((error) => {
      alert(error);
  })
  }



  changeRecordingState = () => {
    if (!this.state.isRecordingInstrument) {
      console.log("recording")
      this.InstrumentElement.current.startRecording()
    }
    else {
      console.log("stopped")
      this.InstrumentElement.current.stopRecording()
    }
    this.setState({ isRecordingInstrument: !this.state.isRecordingInstrument })
  }

  checkInterrupt = () => {
    if (this.state.isRecordingInstrument) {
      this.setState({ isRecordingInstrument: false })
      this.InstrumentElement.current.interruptRecording()
    }
  }

  //changes an instrument
  changeInstrument = selectedOption => {
    this.checkInterrupt()
    this.setState({ selectedOption  })
    this.setState({ selectedTuning:  { value: "classic", label: "Classic"} })
    this.InstrumentElement.current.chooseInstrument(selectedOption.value)
  };

  //changes tuning
  changeTuning = selectedTuning => {
    this.checkInterrupt()
    this.setState({ selectedTuning  });    
    this.InstrumentElement.current.chooseTuning(selectedTuning.value)
  };


  //plays the song
  playRecording = () => {
    if (!this.state.isRecordingInstrument){
      this.InstrumentElement.current.playSong()
    }
  }

  //upload and download song
  getRecording = () => {
    if (!this.state.isRecordingInstrument){
      let song = this.InstrumentElement.current.returnSong()
      if(song) {
        this.saveSong(song)
        this.downloadFile()
      } 
      else console.log("nothing was recorded")
    }
    else console.log("recording currently")


  }




  render () {
    const { selectedOption } = this.state;

    tuningOptions = Object.keys(SCALES[selectedOption.value])
    generateEntries(tuningOptions)

    return (
      
      <div className="App">
          <div className="main">
            <div className="upper-panel">
              <div className="dropdown-container">
                <div className="dropdown">
                    <Select className="dropdown"
                      value={{label : this.state.selectedOption.label}}
                      onChange={this.changeInstrument}
                      options={options}
                      placeholder="Select instrument"
                      isSearchable={false}
                      styles={selectStyle}
                    />
                </div>            
                <div className="dropdown">
                    <Select className="dropdown"
                      value={{label : this.state.selectedTuning.label}}
                      onChange={this.changeTuning}
                      options={tuningOptions}
                      placeholder="Select instrument"
                      isSearchable={false}
                      styles={selectStyle}
                    />
                </div>  
              </div>
              <div className="button-container">
                <input type="button" onClick={this.getRecording} className={this.state.isRecordingInstrument ? 'button-download recording': "button-download"}/>
                <input type="button" onClick={this.playRecording} className={this.state.isRecordingInstrument ? "button-play recording" :"button-play"}/>
                <RecordButton buttonClick={this.changeRecordingState} recording={this.state.isRecordingInstrument}/>
              </div>
            </div>
            <div className="instrument">
              <Instrument ref={this.InstrumentElement}
                instrument = {this.state.selectedOption.value} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
