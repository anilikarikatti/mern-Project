const express = require("express");

const app = express();

let cors = require("cors");

const session = require('express-session')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(cors())
const routes = require("./routes")
const port = 8000;



let db = require("./dbconfig");

app.get("/addUser",(req,res)=>{
    console.log(db);


})

app.use("/",routes)

app.listen(port,()=>{
    console.log(`listening port ${port}`);
})