// todo: add in joi validation for schema.
// todo: make sure joi validation only allows for a thumbnail and a main image

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
  coinGeckoId: String,
  name: String,
  description: String,
  price: Number,
  images: [{
    filename: String,
    imageType: {
      type: String,
      enum: ['thumbnail', 'main']
    },
    url: String
  }]
})


module.exports = mongoose.model('Coin', CoinSchema)
