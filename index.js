var app  = require('app')
var BrowserWindow = require('browser-window')
var config = require('./config.js')

var mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: config.windowWidth,
                                   height: config.windowHeight,
                                   frame: false,
                                   fullscreen: true,
                                   kiosk: true})
  mainWindow.loadURL('file://' + require('path').join(__dirname, 'browser.html'))
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
