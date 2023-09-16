const mongoose = require("mongoose");

// mongoose.set('useCreateIndex', true);
const ObjectId = mongoose.Schema.Types.ObjectId



const UserSchema = new mongoose.Schema({
    name : {type: String},
    password : {type: String},
    age:{type:Number},
    gender:{type:String},
    Dob:{type:Date},
    own: [
      {
        type: ObjectId,
        ref: "Own"
      }
    ]
  })
  

  const User = mongoose.model("User",UserSchema)


  User.register = async ({name,password,age,gender,Dob}) =>{
    
    await User.create({
        name:name,
        password:password,
        age:age,
        gender:gender,
        Dob:Dob
    })
       


}

User.authenticate = async function(username, password){
  let user = await User.findOne({name:username, password: password}).exec()
  return user
}

module.exports = User;