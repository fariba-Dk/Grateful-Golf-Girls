//we are setting passport google strategy
//http://www.passportjs.org/packages/passport-google-oauth20/
require('dotenv').config()
const passport = require('passport')

const{Strategy: GoogleStrategy} = require("passport-google-oauth20")


//here we are having users to be authenticated
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL

},(_, __, profile, done) =>{

  const account = profile._json;
  console.log(account)

}
));
// Authenticate Requests
