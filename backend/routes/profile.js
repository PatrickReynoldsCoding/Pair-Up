const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/profile');

router.get('/me', ProfileController.Me);
router.get('/all', ProfileController.All);

module.exports = router;