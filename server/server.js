const express = require('express');
const app = express()









app.get('/', async (req, res) =>{
  try{
    res.send('Hi this is coming from localhost 3500/')
  }catch(err){
    res.send(err)
  }

})

require('dotenv').config()

const PORT = 3500;
app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`)
})
