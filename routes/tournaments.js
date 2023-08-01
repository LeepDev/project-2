const express = require('express');
const router = express.Router();
const tournamentsCtrl = require("../controllers/tournaments.js")
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, tournamentsCtrl.index);
router.get('/new', ensureLoggedIn, tournamentsCtrl.new);
router.get('/:id', ensureLoggedIn, tournamentsCtrl.show);
router.post('/', ensureLoggedIn, tournamentsCtrl.create)

module.exports = router;
