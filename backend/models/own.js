const mongoose = require("mongoose")
// mongoose.set('useCreateIndex', true);
const ObjectId = mongoose.Schema.Types.ObjectId
const OwnSchema =new mongoose.Schema({
    asset: {type: ObjectId, ref:'Asset'},
    user: {type: ObjectId, ref:"Users"},

   
})

OwnSchema.index({asset:1,user:1},{unique:true});


const Own  = mongoose.model("Own", OwnSchema)
Own.getAll = async function(){
    try {
        return await Own.find().populate("User")
                                   .populate("Asset")
    } catch (error) {
        console.log(err)
        return []
    }
}


module.exports = Own