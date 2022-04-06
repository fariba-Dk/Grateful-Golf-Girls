const express = require('express')
const router = express.Router();



router.get('/', async(req,res)=>{
  try{
    res.send('Hi from authRouter!')

  }catch(err){
    console.error(err)
  }

})




module.exports = router;
