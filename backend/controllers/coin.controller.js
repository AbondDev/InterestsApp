//Todo: add in api dependencies
//Todo: implement these controllers
//Todo: Add error handlers
const Coin = require('../models/coin.model.js');

module.exports.fetch = async (req,res) => {
  const {id} = req.params;
  const coin = await Coin.findById(id).exec();
  if(coin){
    res.json(coin);
  }
  else{
    throw new Error("Coin not found")
  }
}


module.exports.list = async (req,res) => {
  const coins = await Coin.find({})
  res.json(coins)
}

module.exports.add = async(req,res) => {
  const {coinName, coinGeckoId, description, price} = req.body
  const coin = new Coin()
  coin.coinGeckoId = coinGeckoId
  coin.name = coinName
  coin.description = description
  coin.price = price
  coin.main.url = req.files[0].path
  coin.main.filename = req.files[0].filename+'_main'
  coin.thumb.url = req.files[0].path.replace('/upload','/upload/w_200')
  coin.thumb.filename = req.files[0].filename+'_thumb'
  await coin.save()
}

module.exports.update = async(req,res) => {
  throw new Error('Not implemented')
}
module.exports.delete = async(req,res)  => {
  const {id} = req.params
  await coin.findByIdAndDelete(id)
}
