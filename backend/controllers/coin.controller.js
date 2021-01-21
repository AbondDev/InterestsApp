const ExpressError = require('../utils/ExpressError')
const Coin = require('../models/coin.model');

module.exports.fetch = async (req,res) => {
  const {id} = req.params;
  const coin = await Coin.findById(id).populate({path: 'facts'});
  if(coin){
    res.json(coin);
  }
  else{
    throw new ExpressError("Coin not found",404)
  }
}

module.exports.list = async (req,res) => {
  const coins = await Coin.find({}).populate({path: 'facts'})
  res.json(coins)
}

module.exports.add = async(req,res) => {
  const {coinName, coinGeckoId, description, price} = req.body
  if(coinName && description && price) {
    const coin = new Coin()
    coin.coinGeckoId = coinGeckoId
    coin.name = coinName
    coin.description = description
    coin.price = price
    coin.main.url = req.files[0].path
    coin.main.filename = req.files[0].filename+'_main'
    await coin.save()
  } else {
    throw new ExpressError("Invalid Parameters. Check req.body and req.files as well",400)
  }
}

module.exports.delete = async(req,res)  => {
  const {id} = req.params
  await coin.findByIdAndDelete(id)
}
