const ffmpeg = require('ffmpeg-cli');

const absolutePath = require('path')
const exec = require('child_process').exec;




const SONG = {
  "path": "/public/notes/handpan/",
  "notes": [
      {
          "note": "d1",
          "time": 328
      },
      {
          "note": "d1",
          "time": 920
      },
      {
          "note": "c2",
          "time": 984
      },
      {
          "note": "f1",
          "time": 1366
      }
  ]
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


//function that constructs a FFMPEG command
//this command mixes audio with appropriate time
function generateCommand (sheet)
{
  let notes = sheet.notes
  let path = sheet.path
  
  let command1 = '-y'
  let command2 = ' -filter_complex "'
  let command3 = ''
  let command4 = 'amix=inputs=' + notes.length + ',volume=' + notes.length + '" ./output/recording.mp3'
  
  let completeCommand = ''

  let notePath = ''
  let delayData = ''
  let mixData = ''

  notes.forEach((note, i) => {
    notePath = ' -i ' + path + capitalize(note.note) + '.mp3'
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
    console.log(ffmpeg.runSync(generateCommand(sheet)))
}


// convertSong(SONG)


function isOdd(num) { return num % 2;}

function generateLengths() {
    let left = 0
    let right = noteAmount - 1

    let leftArr = []
    let rightArr = []

    let length = ''
    let value = 0
    for (let i = 0; i < noteAmount; i++)
    {
        value = Math.ceil(50 + ((i+1) * 50 / noteAmount))

      if (isOdd(noteAmount - i)){
        //leftArr push
        rightArr.push(value + '%')

      }
      else{
        //rightArr push
        leftArr.push(value + '%')

      }
    //   left++;
    //   right--;

    }
    let reversed = rightArr.reverse()
      //rightArr reverse
      //merge array
    let whole = leftArr.concat(reversed)

    // console.log(leftArr)
    // console.log(reversed)
    console.log(whole)
    return whole
  }

  let noteAngles = []
  
  let noteAmount = 8

function generateAngles(noteAmount) {
    let arr = []

    let angle = 0
    for (let i = 0; i < noteAmount; i++){

        angle = 360 / noteAmount * (i + 0.5) 

        angle = Math.round(angle * 10) / 10

        arr.push(angle)
    }
    return arr
}


// console.log(generateAngles(noteAmount))

// exec('ffmpeg ' + generateCommand(SONG));
console.log(ffmpeg.path)
let idk = __dirname.toString()
let pain = idk.replace(/\\/g, "/").slice(0, -6)
console.log(pain)