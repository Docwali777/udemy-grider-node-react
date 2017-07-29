const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose');
let  keys = require('../PASSWORDS_PRIVATE_INFO/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done) =>{
  done(null, user.id)
})

passport.deserializeUser((id, done)=>{
  User.findById(id)
    .then(user =>{
      done(null, user)
    })
})


passport.use(
  new GoogleStrategy(
    {
  clientID:  keys.googleClientID ,
  clientSecret: keys.googleClientSecret ,
  callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile, done)=>{
User.findOne({googleID: profile.id})
  .then(existingUSer =>{
    if(existingUSer){
        done(null, existingUSer)
    } else {
      console.log('new user craeted in mLAB DB');
        new User({googleID: profile.id}).save()
          .then(user =>{
              done(null, user)
          }).catch(e =>console.log(e))
    }
  }).catch(e =>{
    console.log(e);
  })


}

))
