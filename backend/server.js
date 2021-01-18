//Todo: remove unnecessary semicolons throughout project

if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const coinRoutes = require('./routes/coin.route.js');
const server = express();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/code-test'
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
  console.log('Database Connected')
});

server.use('/coins',coinRoutes)
server.use('*', (req,res) => {
  res.send(`Invalid url ${req.originalUrl}` )
})

server.listen(process.env.PORT, () => {
  console.log(`Serving on port ${process.env.PORT}`)
})
