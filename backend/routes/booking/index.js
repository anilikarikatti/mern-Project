const routes = require("express").Router()
const controllers = require("../../controllers/own")

routes.route('/add')
      .post(controllers.addBooking)
    //   .get(controllers.bookingController.addBookingView)

// routes.route("/view")
      // .get(controllers.bookingController.getBookings)
      
module.exports = routes