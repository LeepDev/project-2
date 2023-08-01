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
        const user = await User.findById(req.user).populate('team')
        res.render("teams/index", { title: "Teams", user });
    } catch (err) {
        console.error(err)
    }
}

async function show(req, res) {
    try{
        const team = await Team.findById(req.params.id).populate('golfer')
        const tournament = await Tournament.findById(team.tournament)
        const golfersInTourney = tournament.golfer
        const allGolfers = await Golfer.find({})
        let golfers = allGolfers.filter(g => !golfersInTourney.includes(g._id))
        res.render("teams/show", { title: "Teams", team, golfers, tournament });
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
      const tournament = await Tournament.findById(team.tournament)
      const user = await User.findById(req.user)
    
      if (!team || !tournament) return res.redirect('/tournaments');
    
      user.team.remove(req.params.id)
      tournament.team.remove(req.params.id)
      team.golfer.map(g => tournament.golfer.remove(g))
      
      await user.save();
      await tournament.save();
      await Team.deleteOne({ _id: req.params.id })
      
      res.redirect(`/tournaments/${tournament._id}`);
    } catch (err) {
      console.error(err)
    }
}

async function create(req, res) {
    try{
        req.body.user = req.user
        req.body.tournament = req.params.id
        const team = await Team.create(req.body)

        const user = await User.findById(req.user)
        user.team.push(team)
        await user.save()

        const tournament = await Tournament.findById(req.params.id)
        tournament.team.push(team)
        await tournament.save()

        res.redirect(`/teams/${team._id}`)
    } catch (err) {
        console.error(err)
    }
}