// const User = require("./models/User.js")
let mongoose = require("mongoose")
// mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/Task",  {useUnifiedTopology: true ,
useNewUrlParser: true})
                 
let db = mongoose.connection
db.on('error', console.error.bind(console, "connection error"))

// db.once('open', function(err){
//     if (err)
//         throw err
//     User.createAdmin("admin@travelapp.com","admin")
//         .then(()=>console.log("created admin user"))
//         .catch(reason => console.log(reason))
// })
// async function func(){
// let user = await User.authenticate('admin@travelapp.com','admin')
// console.log(user)
// }

// func()
exports.db = db;

