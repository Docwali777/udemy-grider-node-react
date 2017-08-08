const mongoose = require('mongoose');
let { Schema }  = mongoose

const userSchema = new Schema({
  googleID: String,
  credits: {
    type: Number,
    default: 0
  }
})

mongoose.model('users', userSchema)
