const express = require('express')
const router = express.Router();
const passport = require('passport')


router.get('/', async(req,res)=>{
  try{
    res.send('Hi from authRouter!')
  }catch(err){
    console.error(err)
  }
})
//users send req to begin authentication cycle
//we are telling passport that we are using google passport strategy so we need to set up our passort google strategy
router.get("/google", passport.authenticate('google', {
  scope:"profile",
}))




module.exports = router;
