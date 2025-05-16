const express = require('express');
const { requestPickup } = require('../controllers/pickupController');
const router = express.Router();

router.post('/', requestPickup);

module.exports = router;