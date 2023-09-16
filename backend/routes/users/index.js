const routes = require("express").Router()
const controllers = require("../../controllers")

routes.route('/login')
      .post(controllers.userController.login)
      .get((req,res)=>res.send("hell world"))
   
      
routes.route('/register')
      .post(controllers.userController.register)
      .get((req, res)=>{
          return res.send("failure")
      })


module.exports = routes     
