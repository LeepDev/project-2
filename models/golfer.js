const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golferSchema = new Schema({
  name: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Golfer', golferSchema);
