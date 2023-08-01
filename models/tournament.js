const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    name: String,
    maxPlayers: Number,
    betAmount: Number,
    par: Number,
    cutLine: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
}, {
  timestamps: true
});


module.exports = mongoose.model('Tournament', tournamentSchema);
