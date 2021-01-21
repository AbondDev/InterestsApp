const express = require('express');
const router = express.Router({mergeParams: true});
const facts = require('../controllers/fact.controller')
const catchAsync = require('../utils/catchAsync')


router.route('/')
  .get(catchAsync(facts.list))
  .post(catchAsync(facts.add))

router.route('/:factId')
  .get(catchAsync(facts.fetch))
  .put(catchAsync(facts.update))
  .delete(catchAsync(facts.delete))

module.exports = router;
