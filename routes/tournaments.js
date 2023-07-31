const express = require('express');
const router = express.Router();
const tournamentsRouter = require("../controllers/tournaments.js")

router.get('/', tournamentsRouter.index);
router.get('/new', tournamentsRouter.new);
router.get('/:id', tournamentsRouter.show);
router.post('/', tournamentsRouter.create)

module.exports = router;
