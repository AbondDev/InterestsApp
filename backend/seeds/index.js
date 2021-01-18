const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
const Coin = require('../models/coin.model.js');

mongoose.connect('mongodb://localhost:27017/code-test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});


const seedDB = async () => {
  await Coin.deleteMany({})
  const rawdata = fs.readFileSync(path.join(__dirname, '/coinData.json'));
  const parsedData = JSON.parse(rawdata);
  const coins = parsedData.coins
  for (let i = 0; i < coins.length - 2; i++) {
    const coin = new Coin({
      coinGeckoId: coins[i].item.id,
      name: coins[i].item.name,
      description: `Symbol: ${coins[i].item.symbol} Rank: ${coins[i].item.market_cap_rank}`,
      price: Math.floor(Math.random() * 20) + 10,
      thumb: {
        filename: `code-test/${coins[i].item.symbol}_thumb`,
        url: coins[i].item.thumb
      },
      main: {
        filename: `code-test/${coins[i].item.symbol}_main`,
        url: coins[i].item.large
      }
    })
    await coin.save();
  }
}
seedDB().then(() => {
  mongoose.connection.close();
})
