const keys = require('../PASSWORDS_PRIVATE_INFO/keys')
const stripe = require('stripe')(keys.STRIPE_SECRET_KEY);
const User = require('../MODELS/user')
const requireLogin = require('../Middlewares/requireLogin')
module.exports = app => {

  app.post('/api/stripe', requireLogin,  (req, res) => {

    stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id
    }, (err, users)=>{
      if(err){console.log('Charge not sent'. err)}
      else {
        req.user.credits += 5
        const userInfo  = req.user.save()
       res.send(userInfo)
      }
    }).then(info =>{
      console.log(info, 2);
    }).catch(e => {
      console.log(e);
    })

})
}
