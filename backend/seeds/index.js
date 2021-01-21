if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
const Coin = require('../models/coin.model');
const Fact = require('../models/fact.model')

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/code-test'
mongoose.connect(dbUrl, {
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
  await Fact.deleteMany({})
  const rawdata = fs.readFileSync(path.join(__dirname, '/coinData.json'));
  const parsedData = JSON.parse(rawdata);
  const coins = parsedData.coins
  for (let i = 0; i < coins.length; i++) {
    const price = Math.floor(Math.random() * 20) + 10
    const fact = new Fact({body: "This is one of my favorite coins", author: "Mr. B"});
    await fact.save();
    const coin = new Coin({
      coinGeckoId: coins[i].item.id,
      name: coins[i].item.name,
      description: `The shortened symbol for ${coins[i].item.name} is ${coins[i].item.symbol} `,
      price: price,
      main: {
        filename: `code-test/${coins[i].item.symbol}_main`,
        url: coins[i].item.main
      }
    })
    coin.facts.push(fact);
    await coin.save();
  }
}
seedDB().then(() => {
  mongoose.connection.close();
})
