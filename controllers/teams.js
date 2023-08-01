const User = require('../models/user')
const Team = require('../models/team')
const Tournament = require('../models/tournament')
const Golfer = require('../models/golfer')

module.exports = {
    index,
    show,
    create,
    new: newTeam,
    delete: deleteTeam
  }
  
async function index(req, res) {
    try{
        const teams = await Team.find().populate('tournament').sort('tournament')
        res.render("teams/index", { title: "All Teams", teams });
    } catch (err) {
        console.error(err)
    }
}

async function show(req, res) {
    try{
        const team = await Team.findById(req.params.id).populate('golfers tournament')
        const tournamentTeams = await Team.find({ tournament: team.tournament })
        const golfersInTourney = tournamentTeams.flatMap(team => {return team.golfers})
        const golfers = await Golfer.find({ _id: { $nin: golfersInTourney }})
        res.render("teams/show", { title: "Team " + team.name, team, golfers });
    } catch (err) {
        console.error(err)
    }
}

async function newTeam(req, res) {
    try {
        res.render("teams/new", { title: "Create Team" , tournamentId: req.params.id });
    } catch (err) {
        console.error(err)
    }
}

async function deleteTeam(req, res) {
    try {
      const team = await Team.findById(req.params.id)
    
      if (!team) return res.redirect('/tournaments');
    
      await Team.deleteOne({ _id: req.params.id })
      
      res.redirect(`/teams`);
    } catch (err) {
      console.error(err)
    }
}

async function create(req, res) {
    try{
        req.body.user = req.user
        req.body.tournament = req.params.id
        const team = await Team.create(req.body)

        res.redirect(`/teams/${team._id}`)
    } catch (err) {
        console.error(err)
    }
}