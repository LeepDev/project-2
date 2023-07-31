const User = require('../models/user')
const Team = require('../models/team')
const Tournament = require('../models/tournament')

module.exports = {
    index,
    show,
    create,
    new: newTournament
  }
  
async function index(req, res) {
    try{
        const tournaments = await Tournament.find({})
        res.render("tournaments/index", { title: "Tournaments", tournaments });
    } catch (err) {
        console.error(err)
    }
}

async function show(req, res) {
    try{
        const tournament = await Tournament.findById(req.params.id).populate('team')
        res.render("tournaments/show", { title: "Tournaments", tournament });
    } catch (err) {
        console.error(err)
    }
}

function newTournament(req, res) {
    res.render("tournaments/new", { title: "Create Tournament" });
}

async function create(req, res) {
    try {
        const tournament = await Tournament.create(req.body)
        res.redirect(`/tournaments/${tournament._id}`)
    } catch (err) {
        console.error(err)
    }
}