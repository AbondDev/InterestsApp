//Todo: implement these controllers
//Todo: Add error handlers
const Fact = require('../models/fact.model');
const Coin = require('../models/coin.model')
module.exports.fetch = async (req,res) => {
  const {factId} = req.params;
  const fact = await Fact.findById(factId).exec();
  if(fact) {
    res.json(fact)
  } else {
    throw new Error("Coin not Found")
  }
}


module.exports.list = async (req,res) => {
  const {coinId} = req.params;
  const coin = await Coin.findById(coinId).populate({path: 'facts'})
  res.json(coin.facts)
}

module.exports.add = async(req,res) => {
  const {coinId} = req.params;
  const coin = await Coin.findById(coinId)
  const fact = new Fact(req.body)
  coin.facts.push(fact);
  await fact.save();
  await coin.save();
}

module.exports.update = async(req,res) => {
  // throw new Error('Not implemented')
  res.json("made it to update")
}
module.exports.delete = async(req,res)  => {
  const {coinId, factId} = req.params;
  await Coin.findByIdAndUpdate(coinId, {$pull: {facts: factId}})
  await Fact.findByIdAndDelete(factId)
  // todo: this should probably check that the fact id exists in the coin id
  res.json("deleted")
}
