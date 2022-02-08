const converter = require("./notehelper.js")
const mongoose = require('mongoose')

const express = require("express");




const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

mongoose.connect('mongodb://localhost/songRecorder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/download', function(req, res){

  const file = `${__dirname}/output/recording.mp3`;
  res.download(file); // Set disposition and send it.
});


app.post('/upload', function(req, res){
  console.log(req.body)
  converter.convertSong(req.body)
});


app.post('/songs', (req, res) => {
  const song = req.body.songNotes
  console.log(song)

  converter.convertSong(song)

  res.json(song)
})