const mongoose = require('mongoose');

const { Schema } = mongoose;

const barkSchema = new Schema({
 id: {
    type: Number,
  },

description:{
      type: String,
    },
likes:{
        type: Number,
        default: 0
    }

});

const Bark = mongoose.model('Bark', barkSchema);

module.exports = Bark;


