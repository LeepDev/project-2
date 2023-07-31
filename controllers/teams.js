const User = require('../models/user')
const Team = require('../models/team')

module.exports = {
    index,
    show,
    create,
    new: newTeam
  }
  
async function index(req, res) {
    try{
        const user = await User.findById(req.user._id).populate('team')
        res.render("teams/index", { title: "Teams", user });
    } catch (err) {
        console.error(err)
    }
}

async function show(req, res) {
    try{
        const team = await Team.findById(req.params.id)
        res.render("teams/show", { title: "Teams", team });
    } catch (err) {
        console.error(err)
    }
}

function newTeam(req, res) {
    res.render("teams/new", { title: "Create Team" });
}

async function create(req, res) {
    try{
        const team = await Team.create(req.body)
        // { user: req.user, golferArray: [ req.body.golfPro ], name: req.body.name } 
        const user = await User.findById({ _id: req.user._id })
        user.team.push(team._id)
        await User.updateOne({ team: user.team })
        res.redirect(`/teams/${team._id}`)
    } catch (err) {
        console.error(err)
    }
}