const express = require('express');
const router = express.Router();
const golfersCtrl = require("../controllers/golfers")
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/teams/:id/golfers', ensureLoggedIn, golfersCtrl.create)
router.delete('/teams/:id/golfers/:gid', ensureLoggedIn, golfersCtrl.delete);

module.exports = router;
