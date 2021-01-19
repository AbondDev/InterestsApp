const mongoose = require('mongoose');
const {Schema} = mongoose;

const factSchema = new Schema({
  body: {type: String},
  author: {type: String}
})

module.exports = mongoose.model("Fact", factSchema)
