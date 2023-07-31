const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roundSchema = new Schema({
    number: Number,
    score: Number,
    golferStatus: String,
    tournament: {
        type: Schema.Types.ObjectId,
        ref: 'Tournament'
    },
    golfer: {
        type: Schema.Types.ObjectId,
        ref: 'Golfer'
    }
}, {
  timestamps: true
});


module.exports = mongoose.model('Round', roundSchema);
