require('dotenv').config()
const express = require("express");
const app = express();

require("dotenv").config();
const cors = require("cors");

const db = require('../server/db/db');


//MIDDLE => has access to both request and response
app.use(express.json());//give req calls json body
app.use(cors())


// ------------- ROUTES -----------
//  ----- GET  ALL BLOGGERS ---http://localhost:4040/bloggers
app.get('/bloggers', cors(), async(req, res,) => {

  try{
    const bloggers = await db.query("SELECT * FROM golf_blogger")

    res.status(200).json(bloggers.rows)

    console.log('this is golfer page using golfers')

  }catch(err){

    res.status(400).json(err)
  }
})

//  ------------ GET ONE BLOGGER?:id ---->
app.get('/bloggers/:id', cors(), async(req, res) => {

  try{
    const {id} = req.params;
    const oneBlogger = await db.query("SELECT * FROM golf_blogger WHERE id = $1", [id]);

    res.status(200).json(oneBlogger.rows[0])

  }catch(err){

    res.status(400).json(err)
  }
})


//  ------------ GET ALL COURSES -----
app.get('/courses', cors(), async(req, res, next) => {

  try{
    const getCourses = await db.query("SELECT * FROM golf_courses");

    res.status(200).json(getCourses.rows)

  }catch(err){
    res.status(400)
  }
})

//  ------------ GET ONE COURSE/:id ---------
app.get('/courses/:id', cors(), async(req, res) => {

  try{
    const {id} = req.params;
    const getOneCourse = await db.query("SELECT * FROM golf_courses WHERE id = $1", [id]);

    res.status(200).json(getOneCourse.rows[0])
    console.log('this is golf/id should take you to a golf course page')

  }catch(err){

    res.status(400).json(err)
  }
})


//  ------------ GET ALL POSTS ---
app.get('/posts', cors(), async(req, res) => {

  try{
    const getAllPosts = await db.query("SELECT * FROM posts")

    res.status(200).json(getAllPosts.rows)

    console.log('this is all posts')

  }catch(err){

    res.status(400).json(err)
  }
})

//  ------------ GET ONE POST /:id
app.get('/posts/:id', cors(), async(req, res) => {

  try{
    const {id} = req.params;
    //SELECT "id", "body", "author_id", "posting_date" FROM "public"."posts"  ORDER BY "id" ASC  LIMIT 1000
    const getOnePost = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    //const getAllPosts =await db.query('SELECT "id", "body", "author_id", "posting_date" FROM "public"."posts"  ORDER BY "id" ASC  LIMIT 1000')

    res.status(200).json(getOnePost.rows[0])

    console.log('this is golfer page using posts/id should take you to a golf player page')

  }catch(err){

    res.status(400).json(err)
  }
})


//~~~~~~~    POST ROUTES
//----- POST A NEW BLOGGER   (username, img, google_id, email, residence)
app.post('/blogger', cors(), async (req, res) => {

  try{
    const addABlogger = {
    username: req.body.username,
    img:req.body.img,
    google_id: req.body.google_id,
    email: req.body.city,
    residence: req.body.residence,
    }

    const newBlogger = await db.query("INSERT INTO golf_blogger (username,img,google_id,email,residence) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [addABlogger.username,addABlogger.img,addABlogger.google_id,addABlogger.email,addABlogger.residence])
    res.status(200).json(newBlogger.rows[0])
  }catch(err){
    res.status(400).json(err)
  }
})

//------  POST A NEW COURSE ----- (name, location, price_range, ratings)
app.post('/courses', cors(), async (req, res) => {

  try{
    const addACourse = {name: req.body.name,
    location:req.body.location,
    price_range: req.body.price_range,
    ratings:req.body.price_range,
    city:req.body.city,
    state:req.body.state
  }

  const newCourse = await db.query("INSERT INTO golf_courses (name,location,price_range,ratings,city,state)VALUES($1,$2,$3,$4,$5,$6) RETURNING *",[addACourse.name,addACourse.location,addACourse.price_range,addACourse.ratings,addACourse.city,addACourse.state])
    res.status(200).json(newCourse.rows[0])

  }catch(err){
    res.status(400).json(err)
  }
})


//-------  POST A NEW POST --- (body, author_id, posting_date)
app.post('/posts', cors(), async(req, res) => {

  try{
    const addAPost = {title: req.body.title,
    author:req.body.author,
    posting_date:req.body.posting_date}

    const newPost = await db.query("INSERT INTO posts(title,author,posting_date) VALUES ($1,$2,$3) RETURNING *", [addAPost.title, addAPost.author,addAPost.posting_date]);
    res.status(200).json(newPost.row[0])

  }catch(err){

    res.status(400).json(err)
  }

})

//PUT ---> UPDATE A BLOGGER /:id ---- its like POST => we have to pass in all the fields to update
// (username, img, google_id, email, residence)
app.put('/blogger/:id', cors(), async (req, res) => {
  console.log(req.body)

  try{
    const updatedBlogger = await db.query("UPDATE golf_blogger SET username=$1,email=$2,residence=$3 WHERE id=$4 RETURNING *", [req.body.username,req.body.email,req.body.residence])
    res.status(200).json(updatedBlogger.rows[0])

  }catch(err){
    res.status(400).json(err)
  }
})

//------  PUT/UPDATE A COURSE ----- (name, location, price_range, ratings)
app.put('/course/:id', cors(), async (req, res) => {
  console.log(req.body)

  try{
    const updatedCourse = await db.query("UPDATE golf_course SET name=$1, location=$2,ratings=$3 WHERE id=$4 RETURNING *",
    [req.body.name, req.body.location,req.body.ratings])
    res.status(200).json(updatedCourse.rows[0])

  }catch(err){
    res.status(400).json(err)
  }
})


//-------  PUT/UPDATE A POST --- (title, author, posting_date)
app.put('/course/:id', cors(), async (req, res) => {
  console.log(req.body)

  try{
    const updatedPost = await db.query("UPDATE posts SET title=$1, author=$2,posting_date=$3 WHERE id=$4 RETURNING *",
    [req.body.title, req.body.author,req.body.posting_date])

    res.status(200).json(updatedPost.rows[0])
  }catch(err){
    res.status(400).json(err)
  }
})

//DELETE ----- DELETE A BLOGGER/:id
app.delete('/blogger/:id', cors(), async(req, res) => {

  try{
    const deleteBlogger = await db.query("DELETE FROM golf_blogger WHERE id = $1", [req.params.id]);

    res.status(200).json(deleteBlogger.rows[0])
    console.log('Blogger is deleted successfully')

  }catch(err){

    res.status(400).json(err)
  }
})

//DELETE ----- DELETE A COURSE/:id
app.delete('/courses/:id', cors(), async(req, res) => {

  try{
    const deleteCourse = await db.query("DELETE FROM golf_courses WHERE id = $1", [req.params.id]);

    res.status(200).json(deleteCourse.rows[0])
    console.log('The golf course is deleted successfully')

  }catch(err){

    res.status(400).json(err)
  }
})


//DELETE ----- DELETE A POST/:id
app.delete('/posts/:id', cors(), async(req, res) => {

  try{
    const deletedPost = await db.query("SELECT * FROM posts WHERE id = $1", [req.params.id]);

    res.status(200).json(deletedPost.rows[0])
    console.log('The post is deleted successfully')

  }catch(err){

    res.status(400).json(err)
  }
})




const PORT = process.env.PORT || 4070;

app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`)
})

