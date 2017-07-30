const mongoose = require('mongoose');
let { Schema }  = mongoose

const userSchema = new Schema({
  googleID: String
})

mongoose.model('users', userSchema)
