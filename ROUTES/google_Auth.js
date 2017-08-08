const express = require('express');
const app = express()
const passport = require('passport');

module.exports = (app) =>{
app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
)

app.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/'
}),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/surveys');
})

app.get('/api/logout', (req, res)=>{
  req.logout()
  // res.send({message: 'You have logged out'})
  res.redirect('/')
})

app.get('/api/callback_user', (req, res)=>{
  res.send(req.user)
})




}
