
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3000
const cookieSession = require('cookie-session')
const passport = require('passport');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const keys = require('./PASSWORDS_PRIVATE_INFO/keys')

require('./MODELS/user')
require('./AUTH-PASSPORT/userAuth')



app.use(cors())
app.use(express.static('public'))


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSessionKey]
  }))

app.use(passport.initialize())
app.use(passport.session())


require('./ROUTES/google_Auth')(app)

app.get('/*', (req, res)=>{
res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

mongoose.connect(keys.MONGODB_URI, { useMongoClient: true})
.then(()=> console.log('DB connected to MLAB'))
.catch(err => console.log(err))

app.listen(PORT, ()=>{
  console.log(`Server on port : ${PORT}`);
})
