//Todo: add in api dependencies
//Todo: implement these controllers
const Coin = require('../models/coin.model.js')

module.exports.fetch = async (req,res) => {
  throw new Error('Not implemented')
}

module.exports.list = async (req,res) => {
  const coins = await Coin.find({})
  res.json(coins)
}

module.exports.add = async(req,res) => {
  throw new Error('Not implemented')
}

module.exports.update = async(req,res) => {
  throw new Error('Not implemented')
}
module.exports.delete = async(req,res)  => {
  throw new Error('Not implemented')
}
