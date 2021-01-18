// todo: add in joi validation for schema.
// todo: make sure joi validation only allows for a thumbnail and a main image

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
  coinGeckoId: String,
  name: String,
  description: String,
  price: Number,
  thumb: {
    filename: String,
    url: String
  },
  main: {
    filename: String,
    url: String
  }
})


module.exports = mongoose.model('Coin', CoinSchema)
