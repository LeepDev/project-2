const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  team: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }],
  tournament: [{
    type: Schema.Types.ObjectId,
    ref: 'Tournament'
  }],
  role: String
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
