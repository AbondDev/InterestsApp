
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
  if(coin){
    res.json(coin.facts)
  }else {
    throw new Error("Coin not Found")
  }
}

module.exports.add = async(req,res) => {
  const {coinId} = req.params;
  const coin = await Coin.findById(coinId)
  if(coin) {
    const fact = new Fact(req.body)
    coin.facts.push(fact);
    await fact.save();
    await coin.save();
  } else {
    throw new Error("coin not found")
  }
}

module.exports.update = async(req,res) => {
  const {factId} = req.params
  const factToUpdate = await Fact.findById(factId).exec()
  if(factToUpdate) {
    const updatedFact = await Fact.findByIdAndUpdate(factId,{...req.body.fact})
    await updatedFact.save()
  } else {
    throw new Error("fact not found in database")
  }
}
module.exports.delete = async(req,res)  => {
  const {coinId, factId} = req.params;
  const coinToDelete = await Coin.findById(coinId).exec()
  const factToDelete = await Fact.findById(factId).exec()
  if(coinToDelete && factToDelete) {
    await Coin.findByIdAndUpdate(coinId, {$pull: {facts: factId}})
    await Fact.findByIdAndDelete(factId)
  } else {
    throw new Error("fact or coin not found in database")
  }
}
