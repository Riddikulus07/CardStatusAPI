const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/get_card_status', apiController.getCardStatus);

module.exports = router;
