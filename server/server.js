const express = require('express');
require('dotenv').config();
const app = express()
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
require("./auth")

//use is sets sup midd. when request comes to server, sends it to the app and the request goes thru every line from top to buttom... get '/',...)
//cors a func takes an obj takes in props like credentials and origin
  //we want to communicate our cookies we are cmmunicating to fe and be
app.use(
  cors({
    credentials : true,
  origin: process.env.CLIENT_URL,

}))


//set up session middle every request creates a unique id for user which holds users session's info
app.use(
  session ({
  secret: process.env.COOKIE_SECRET,
  cookie:{
    secure: process.env.NODE_ENV === "production" ? "true" : "auto",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  },
  resave: false,
  saveUninitialized: false,
}))

app.use(passport.initialize())
app.use(passport.session())


//import routers => /index do this
const indexRouter = require('./routes/indexRouter')
app.use('/', indexRouter)


//import routers => /auth do this
const authRouter = require('./routes/authRouter')
app.use('/auth', authRouter)

const PORT = process.env.PORT || 3500;

app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`)
})
