// todo: add in joi validation for schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Fact = require('./fact.model')

const CoinSchema = new Schema({
  coinGeckoId: String,
  name: String,
  description: String,
  price: Number,
  main: {
    filename: String,
    url: String
  },
  facts: [{type: Schema.Types.ObjectId,
          ref: 'Fact'}]
})


module.exports = mongoose.model('Coin', CoinSchema)
