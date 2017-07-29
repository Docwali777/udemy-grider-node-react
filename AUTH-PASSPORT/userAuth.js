const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
let key;

if(process.env.NODE_ENV !== 'production'){
   keys = require('../PASSWORDS_PRIVATE_INFO/keys');
}
console.log(process.env.NODE_ENV, keys);

passport.use(
  new GoogleStrategy(
    {
  clientID: process.env.googleClientID || keys.googleClientID ,
  clientSecret: process.env.googleClientSecret || keys.googleClientSecret ,
  callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile)=>{
  console.log('accessToken: ',accessToken);
  console.log('refreshToken: ', refreshToken);
  console.log('profile: ', profile );
}

))
