const express = require('express')
const router = express.Router();
const passport = require('passport')

  /*users send req to begin authentication cycle
  //we are telling passport that we are using google passport strategy so we need to set up our passort google strategy
  it hooks into an event that is called() when req is finished and response is send
  beffore you send out the response let me get the cookie and save it
*/
router.get("/google", passport.authenticate('google', {
  scope:"profile",
}))

/*
1. user reqs
passport calls after the user is authenticated
2.
3.once they are
4.passort gets the code
calls the google to get user profile with the code
google send us to the call back
5.
*/

router.get("/google/callback", passport.authenticate("google",
{
  session: true,
}),
(req, res) => {
  res.send(req.user);
}
)

module.exports = router;
