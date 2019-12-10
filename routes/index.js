const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/game', require('./game/game-index.js'));

module.exports = router;