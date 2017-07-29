import passport from 'passport'
const GoogleStrategy = require('passport-google-oauth20').Strategy
import keys from '../PASSWORDS_PRIVATE_INFO/keys'


passport.use(
  new GoogleStrategy(
    {
  clientID: keys.googleClientID ,
  clientSecret: keys.googleClientSecret ,
  callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile)=>{
  console.log('accessToken: ',accessToken);
  console.log('refreshToken: ', refreshToken);
  console.log('profile: ', profile );
}

))
