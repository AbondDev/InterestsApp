const mongoose = require('mongoose');
const {Schema} = mongoose;

const factSchema = new Schema({
  body: {type: String,
        required: true},
  author: {type: String,
          required: true}
})

module.exports = mongoose.model("Fact", factSchema)
