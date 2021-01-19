// todo: add in joi validation for schema.
// todo: make sure joi validation only allows for a thumbnail and a main image
// Todo: remove all references to thumbnail imaging
// todo: if the deleting of the coins is implemented, then we also need to delete the associated facts.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Fact = require('./fact.model')

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
  },
  facts: [{type: Schema.Types.ObjectId,
          ref: 'Fact'}]
})


module.exports = mongoose.model('Coin', CoinSchema)
