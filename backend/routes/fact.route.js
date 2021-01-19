const express = require('express');
const router = express.Router({mergeParams: true});
const facts = require('../controllers/fact.controller')


router.route('/')
  .get(facts.list)
  .post(facts.add)

router.route('/:factId')
  .get(facts.fetch)
  .put(facts.update)
  .delete(facts.delete)

module.exports = router;
