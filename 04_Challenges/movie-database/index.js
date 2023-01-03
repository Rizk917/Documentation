const express = require('express')
const app = express()
const port = 3000
const tResponse={ status:200, message:"ok"};
let date_ob = new Date();

app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/test', (req, res) => {
    res.send(tResponse)
  })
//   app.listen(port, () => {
//     console.log(`ok`)
//   })
  app.get('/time', (req, res) => {
    // current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();
if(minutes<10){minutes='0'+minutes}

const timeResponse={status:200, message:hours+':'+minutes};
    res.send(timeResponse)
  })