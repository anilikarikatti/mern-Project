const routes = require("express").Router()
const controllers = require("../../controllers/assetController")

routes.route('/add')
      .post(controllers.addAsset)
      .get(controllers.assetView)



module.exports = routes