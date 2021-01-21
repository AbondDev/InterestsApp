if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const coinRoutes = require('./routes/coin.route.js');
const factRoutes = require('./routes/fact.route.js');
const server = express();

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/code-test'
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
  console.log('Database Connected')
});

server.use('/coins',coinRoutes)
server.use('/coins/:coinId/facts', factRoutes)
server.use('*', (req,res) => {
  res.send(`Invalid url ${req.originalUrl}` )
})

server.listen(process.env.PORT, () => {
  console.log(`Serving on port ${process.env.PORT}`)
})