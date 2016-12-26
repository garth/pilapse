const RaspiCam = require('raspicam')
const path = require('path')

const camera = new RaspiCam({
  mode: 'photo',
  output: path.join(__dirname, `photos/${Date.now().getTime()}.jpg`),
  // timelapse: 1 * 60 * 1000,
  quality: 80
})

// to take a snapshot, start a timelapse or video recording
camera.start()

// to stop a timelapse or video recording
//  camera.stop( )

// listen for the "started" event triggered when the start method has been successfully initiated
camera.on('started', function () {
  console.log('taking photo')
})

// listen for the "read" event triggered when each new photo/video is saved
camera.on('read', function (err, filename) {
  if (err) {
    return console.error('Failed to read from camera', err)
  }
  console.log(filename, 'saved')
})

// listen for the process to exit when the timeout has been reached
camera.on('exited', function () {
  console.log('done.')
})
