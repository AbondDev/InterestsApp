//Todo: add in image uploading

const express = require('express');
const router = express.Router();
const coins = require('../controllers/coin.controller')

router.route('/')
  .get(coins.list)
  .post(coins.add)

router.route('/:id')
  .get(coins.fetch)
  .put(coins.update)
  .delete(coins.delete)

module.exports = router
