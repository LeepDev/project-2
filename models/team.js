const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  golferArray: [],
  tournament: {
    type: Schema.Types.ObjectId,
    // todo: make required later
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Team', teamSchema);
