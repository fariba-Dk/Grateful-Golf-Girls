// const passport = require("passport");
// const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
// require("dotenv").config();
// const pool = require("./db/db");

<<<<<<< HEAD
// //console.log('this is line 6 in aut-->,',process.env.CLIENT_ID)
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: process.env.GOOGLE_CALLBACK_URL,
//     },
||||||| daa10ec
const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
require("dotenv").config();
const pool = require("./db/db");
=======
const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
require("dotenv").config();
const pool = require('./db/db');
>>>>>>> 33b1aabd9b4f627476d32da221f9cc8c6ba514f5

<<<<<<< HEAD
//     async (_, __, profile, done) => {
//       const account = profile._json;
//       console.log(account)
//       let user = {};
//       try {
//         const currentUserQuery = await pool.query(
//           "SELECT * FROM golf_blogger WHERE google_id=$1",
//           [account.sub]
//         );
||||||| daa10ec
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (_, __, profile, done) => {
      const account = profile._json;
      let user = {};
      try {
        const currentUserQuery = await pool.query(
          "SELECT * FROM blog_user WHERE google_id=$1",
          [account.sub]
        );
=======
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (_, __, profile, done) => {
      const account = profile._json;
      console.log(account)
      let user = {};
      try {
        const currentUserQuery = await pool.query(
          "SELECT * FROM blog_user WHERE google_id=$1",
          [account.sub]
        );
>>>>>>> 33b1aabd9b4f627476d32da221f9cc8c6ba514f5

//         if (currentUserQuery.rows.length === 0) {
//           // create user
//           await pool.query(
//             "INSERT INTO golf_blogger (username, img, google_id) VALUES ($1,$2,$3)",
//             [account.name, account.picture, account.sub]
//           );

//           const id = await pool.query("SELECT id FROM golf_blogger WHERE google_id=$1", [
//             account.sub
//           ]);
//           user = {
//             id: id.rows[0].id,
//             username: account.name,
//             img: account.picture,
//           };
//         } else {
//           // have user
//           user = {
//             id: currentUserQuery.rows[0].id,
//             username: currentUserQuery.rows[0].username,
//             img: currentUserQuery.rows[0].img,
//           };
//         }
//         done(null, user);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// )

// passport.serializeUser((user, done) => {
//   // loads into req.session.passport.user
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   // loads into req.user
//   done(null, user);
// });



