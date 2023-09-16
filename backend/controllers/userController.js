const models = require("../models");


async function login(req, res){
    try {
        let user = await models.User.authenticate(req.body.name, req.body.password);
        if(user){
            req.session.user = user 
            console.log(req.session.user);   
            // res.redirect("/")
            res.send("success");
        }
        else{
            
            // req.flash("status","failure!!")
            // return res.redirect("/")
            // console.log("error");
            res.sendStatus(400).json();
        }    
    } catch (error) {
        console.log(error)
        status = error+""
        return res.redirect("/")
    }
    
    
}
// function logout(req, res){
//     if(req.session.user)
//         req.session.user = null;
//     return res.redirect("/")       
// }



async function register(req, res){
    let status;
    try {
        await models.User.register(req.body);  
        status = {'status':'success'}
        req.session.status = status  
        req.flash("status","Success")
        return res.redirect("/")
    } catch (error) {
        req.session.status = status  
        return res.redirect("/")        
    }
    
    
}

module.exports = {
    login,
    register,
    // logout
}
