const Team = require('../models/team');
const Tournament = require('../models/tournament');
const Golfer = require('../models/tournament');

module.exports = {
  create,
  delete: deleteGolfer
};

async function deleteGolfer(req, res) {
  try {
    const team = await Team.findById(req.params.id)
  
    if (!team) return res.redirect('/teams');
  
    team.golfers.remove(req.params.gid)
  
    await team.save();
  
    res.redirect(`/teams/${team._id}`);
  } catch (err) {
    console.error(err)
  }
}

async function create(req, res) {
  try {
    const team = await Team.findById(req.params.id);
    team.golfers.push(req.body.golfer)

    await team.save()

    res.redirect(`/teams/${team._id}`);
  } catch (err) {
    console.log(err);
  }
}