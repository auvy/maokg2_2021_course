const ffmpeg = require('ffmpeg-cli');

// const absolutePath = require('path')
const exec = require('child_process').exec;

// var script = document.currentScript
// var fullUrl = script.src


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let idk = __dirname.toString()
let pain = idk.replace(/\\/g, "/").slice(0, -6)

//function that constructs a FFMPEG command
//this command mixes audio with appropriate time
function generateCommand (sheet)
{
  console.log("got sheet: " + sheet)
  let notes = sheet.notes
  let path = sheet.path
  
  let command1 = '-y'
  let command2 = ' -filter_complex "'
  let command3 = ''
  let command4 = 'amix=inputs=' + notes.length + ',volume=' + notes.length + '" ' + pain + 'server/output/recording.mp3'
  
  let completeCommand = ''

  let notePath = ''
  let delayData = ''
  let mixData = ''

  notes.forEach((note, i) => {
    notePath = ' -i ' + pain + path  + note.note + '.mp3'
    command1 += notePath

    delayData = '[' + i + ']adelay=' + note.time + '|' + note.time + '[' + i + note.note +'];'
    command2 += delayData

    mixData = '[' + i + note.note + ']'
    command3 += mixData
  })
  completeCommand = command1 + command2 + command3 + command4
  console.log(completeCommand)
  return completeCommand
}

function convertSong (sheet) {
  // let command = 'ffmpeg ' + generateCommand(sheet)

  // console.log(command)
  // exec(command);
  // console.log(fullUrl)

    let command = generateCommand(sheet)
    ffmpeg.runSync(command)
}


module.exports= {
    convertSong: convertSong
}