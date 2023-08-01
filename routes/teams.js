const express = require('express');
const router = express.Router();
const teamsCtrl = require("../controllers/teams.js")
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/teams', ensureLoggedIn, teamsCtrl.index);
router.get('/tournaments/:id/teams/new', ensureLoggedIn, teamsCtrl.new);
router.get('/teams/:id', ensureLoggedIn, teamsCtrl.show);
router.post('/tournaments/:id/teams', ensureLoggedIn, teamsCtrl.create)
router.delete('/teams/:id', ensureLoggedIn, teamsCtrl.delete);

module.exports = router;
