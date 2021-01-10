const express = require('express');
const {
  searchByQueryParam
} = require('../controllers/search');

const router = express.Router();

router.get('/search', searchByQueryParam);

module.exports = router;
