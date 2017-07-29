const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy

  const keys = require('../PASSWORDS_PRIVATE_INFO/keys');


passport.use(
  new GoogleStrategy(
    {
  clientID: process.env.googleClientID ,
  clientSecret: process.env.googleClientSecret  ,
  callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile)=>{
  console.log('accessToken: ',accessToken);
  console.log('refreshToken: ', refreshToken);
  console.log('profile: ', profile );
}

))
