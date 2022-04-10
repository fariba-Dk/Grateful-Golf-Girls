//pg gives us an object and we want to destructre it and take out the pool

const {Pool} = require("pg")

console.log(Pool
  )
const db = new Pool({

  user: "postgres",
  password:"allbetter",
  host:"localhost",
  port:5432,
  database:"golf_blog"

})
console.log(db
  )
module.exports = db

