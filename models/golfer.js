const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golferSchema = new Schema({
  name: String,
  round: [{
    type: Schema.Types.ObjectId,
    ref: 'Round'
  }],
}, {
  timestamps: true
});


module.exports = mongoose.model('Golfer', golferSchema);
