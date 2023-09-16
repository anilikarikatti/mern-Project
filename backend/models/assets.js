const mongoose = require("mongoose")
// mongoose.set('useCreateIndex', true);
const ObjectId = mongoose.Schema.Types.ObjectId
const AssetSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity:{type:Number},
    price: {type: Number, required: true},
    own: [
        {
          type: ObjectId,
          ref: "Own"
        }
      ],
})

const Asset  = mongoose.model("Asset", AssetSchema)
Asset.getAll = async function(){
    try {
        return await Asset.find()
    } catch (error) {
        console.log(err)
        return []
    }
}
module.exports = Asset