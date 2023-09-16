let express = require('express')
let user_routes = require('./users')
let assets = require("./assets")
// let car_routes = require('./cars')
let booking_routes = require('./booking')


let router = express.Router()
router.get("/", function(req, res){
    console.log("called")
    // return res.redirect("/users/home")
    res.send("entered")
})

router.get("/map", function(req, res){
    console.log("called")
    return res.render("/users/home")

})


router.use("/users", user_routes)
router.use("/assets", assets)
router.use("/bookings", booking_routes )

module.exports = router