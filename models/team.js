const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  golfers: [{
    type: Schema.Types.ObjectId,
    ref: 'Golfer'
  }],
  tournament: {
    type: Schema.Types.ObjectId,
    ref: 'Tournament'
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Team', teamSchema);
