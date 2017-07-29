import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

require('../AUTH-PASSPORT/userAuth')

require('../ROUTES/google_Auth')(app)

app.get('/', (req, res)=>{
  res.send({message: "Dev Server"})
})

app.listen(PORT, ()=>{
  console.log(`Server on port : ${PORT}`);
})
