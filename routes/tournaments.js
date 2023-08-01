const express = require('express');
const router = express.Router();
const tournamentsCtrl = require("../controllers/tournaments.js")
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, tournamentsCtrl.index);
router.get('/new', ensureLoggedIn, tournamentsCtrl.new);
router.get('/:id', ensureLoggedIn, tournamentsCtrl.show);
router.get('/:id/edit', ensureLoggedIn, tournamentsCtrl.edit);
router.post('/', ensureLoggedIn, tournamentsCtrl.create)
router.delete('/:id', ensureLoggedIn, tournamentsCtrl.delete);
router.put('/:id', ensureLoggedIn, tournamentsCtrl.update)

module.exports = router;
