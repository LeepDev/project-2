const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    name: String,
    maxPlayers: Number,
    betAmount: Number,
    golfer: [{
        type: Schema.Types.ObjectId,
        ref: 'Golfer'
    }],
    team: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    par: Number,
    cutLine: Number
}, {
  timestamps: true
});


module.exports = mongoose.model('Tournament', tournamentSchema);
