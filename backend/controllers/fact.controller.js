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
  res.json("made it to list")
}

module.exports.add = async(req,res) => {
  const {coinId} = req.params;
  // const {coinName, coinGeckoId, description, price} = req.body
  // const coin = new Coin()
  // coin.coinGeckoId = coinGeckoId
  // coin.name = coinName
  // coin.description = description
  // coin.price = price
  // coin.main.url = req.files[0].path
  // coin.main.filename = req.files[0].filename+'_main'
  // coin.thumb.url = req.files[0].path.replace('/upload','/upload/w_200')
  // coin.thumb.filename = req.files[0].filename+'_thumb'
  // await coin.save()
  res.json("made it to add")
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
