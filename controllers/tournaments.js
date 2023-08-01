const User = require('../models/user')
const Team = require('../models/team')
const Tournament = require('../models/tournament')

module.exports = {
    index,
    show,
    create,
    new: newTournament,
    delete: deleteTournament
  }
  
async function index(req, res) {
    try{
        const tournaments = await Tournament.find().populate('user').sort('name')
        res.render("tournaments/index", { title: "All Tournaments", tournaments });
    } catch (err) {
        console.error(err)
    }
}

async function show(req, res) {
    try {
        const tournament = await Tournament.findById(req.params.id).populate('user')
        const teams = await Team.find({ tournament: req.params.id }).populate('user').sort('name')
        res.render("tournaments/show", { title: "Tournament " + tournament.name, tournament, teams })
    } catch (err) {
        console.error(err)
    }
}

function newTournament(req, res) {
    res.render("tournaments/new", { title: "Create Tournament" });
}

async function deleteTournament(req, res) {
    try {
        const tournament = await Tournament.findById(req.params.id)
        
        if (!tournament) return res.redirect('/tournaments');
                
        await Tournament.deleteOne({ _id: req.params.id })
        await Team.deleteMany({ tournament: tournament._id })
        
        res.redirect(`/tournaments`);
    } catch (err) {
        console.error(err)
    }
}

async function create(req, res) {
    try {
        req.body.user = req.user
        const tournament = await Tournament.create(req.body)
        res.redirect(`/tournaments/${tournament._id}`)
    } catch (err) {
        console.error(err)
    }
}