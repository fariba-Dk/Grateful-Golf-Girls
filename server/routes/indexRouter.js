const express = require('express')
const router = express.Router();



router.get('/', async(req,res)=>{
  try{
    res.send('Hi from index!')

  }catch(err){
    console.error(err)
  }

})








module.exports = router;
