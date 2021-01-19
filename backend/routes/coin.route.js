//Todo: add in image uploading

const express = require('express');
const router = express.Router();
const coins = require('../controllers/coin.controller');
const multer = require('multer');
const {storage} = require('../cloudinary');
const upload = multer({storage})


router.route('/')
  .get(coins.list)
  .post(upload.array('image'),coins.add)

router.route('/:id')
  .get(coins.fetch)
  .put(coins.update)
  .delete(coins.delete)

module.exports = router
