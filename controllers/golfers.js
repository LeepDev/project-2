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
    const tournament = await Tournament.findById(team.tournament)
  
    if (!team || !tournament) return res.redirect('/tournaments');
  
    team.golfer.remove(req.params.gid)
    tournament.golfer.remove(req.params.gid)
  
    await team.save();
    await tournament.save();
  
    res.redirect(`/teams/${team._id}`);
  } catch (err) {
    console.error(err)
  }
}

async function create(req, res) {
  const team = await Team.findById(req.params.id);
  const tournament = await Tournament.findById(team.tournament._id);
  team.golfer.push(req.body.golfer)
  tournament.golfer.push(req.body.golfer)
  try {
        await team.save()
        await tournament.save()
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/teams/${team._id}`);
}