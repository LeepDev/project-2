const express = require('express');
const router = express.Router();
const teamsRouter = require("../controllers/teams.js")

router.get('/', teamsRouter.index);
router.get('/new', teamsRouter.new);
router.get('/:id', teamsRouter.show);
router.post('/', teamsRouter.create)

module.exports = router;
