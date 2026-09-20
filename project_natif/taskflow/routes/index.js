// routes/index.js - main router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Haii sayang');
});

module.exports = router;
