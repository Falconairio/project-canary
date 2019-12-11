const express = require('express');
const router = express.Router();

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
    validationGame
  } = require('../../helpers/middlewares');

router.use('/addplayer', require('./add-player')); //TODO update this route in readme


module.exports = router;