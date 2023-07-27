const express = require('express');
const router = express.Router();
const teamsRouter = require("../controllers/teams.js")

router.get('/', teamsRouter.index);
router.get('/:id', teamsRouter.show);

module.exports = router;
