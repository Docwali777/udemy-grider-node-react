const mongoose = require('mongoose');
let { Schema }  = mongoose

const userSchema = new Schema({
  googleID: String
})

module.exports = mongoose.model('users', userSchema)
