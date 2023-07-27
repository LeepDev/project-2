const User = require('../models/user')
const Team = require('../models/team')

module.exports = {
    index,
    show
  }
  
  async function index(req, res) {
    try{
        const user = req.user
        res.render("teams/index", {
          title: "Teams", user
        });
    } catch (err) {
        console.error(err)
    }
  }

  function show(req, res) {
    const team = Teams.findById(req.user)
    res.render("teams/index", {
      title: "Teams", team
    });
  }