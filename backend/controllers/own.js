const models = require("../models")

async function addBooking(req, res){
    
      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      // Use the mv() method to place the file somewhere on your server
        console.log("entered");
        
    let newBooking ={
        asset: req.body.id,
        user: req.session.user
       
    }

    console.log(req.session.user)
    models.Own.create(newBooking).then((obj)=>{
        console.log(obj)
        // req.flash("status","Booking successfull")
        // res.redirect('/')
        console.log("added");
        res.sendStatus(200);
    }).catch(()=>res.send(400))

}




module.exports = {
    addBooking,
  
}
