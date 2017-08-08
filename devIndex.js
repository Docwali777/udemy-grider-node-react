require('babel-register')({
  presets: ['es2015', 'es2017', 'react', 'stage-0']
})


const ejs = require('ejs');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const cookieSession = require('cookie-session')
const passport = require('passport');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const keys = require('./PASSWORDS_PRIVATE_INFO/keys')

const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev')

const compiler = webpack(config)

const middleware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true
})

require('./MODELS/user')
require('./AUTH-PASSPORT/userAuth')

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSessionKey]
  }))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./ROUTES/google_Auth')(app)
require('./ROUTES/billingRoutes')(app)

app.use(cors())
app.use(express.static('public'))
app.use(middleware)
app.use(hotMiddleware(compiler))



app.get('/*', (req, res)=>{
  console.log(req.user);
res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

mongoose.connect(keys.MONGODB_URI, { useMongoClient: true})
.then(()=> console.log('DB connected to MLAB'))
.catch(err => console.log(err))

app.listen(PORT, ()=>{
  console.log(`Server on port : ${PORT}`);
})
