const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Fact = require('./fact.model')

const CoinSchema = new Schema({
  coinGeckoId: {type: String},
  name: {type: String,
        required: true},
  description: {type: String,
                required: true},
  price: {type: Number,
          required: true},
  main: {
    filename: {type: String,
              required: true},
    url: {type: String,
          required: true}
  },
  facts: [{type: Schema.Types.ObjectId,
          ref: 'Fact'}]
})


module.exports = mongoose.model('Coin', CoinSchema)
