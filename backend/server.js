//Todo: remove unnecessary semicolons throughout project

if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const coinRoutes = require('./routes/coin.route.js');
const server = express();

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use('/coins',coinRoutes)
server.use('*', (req,res) => {
  res.send(`Invalid url ${req.path}` )
})

server.listen(process.env.PORT, () => {
  console.log(`Serving on port ${process.env.PORT}`)
})
