const express = require('express');
const router = express.Router();
const coins = require('../controllers/coin.controller');
const catchAsync = require('../utils/catchAsync')
const multer = require('multer');
const {storage} = require('../cloudinary');
const upload = multer({storage})



router.route('/')
  .get(catchAsync(coins.list))
  .post(upload.array('image'),catchAsync(coins.add))

router.route('/:id')
  .get(catchAsync(coins.fetch))

module.exports = router
