const models = require("../models")

async function addAsset(req, res){
   
        
    
    let newAsset ={
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    }

    models.Asset.create(newAsset).then((obj)=>{
        console.log(obj)
        // 
        res.sendStatus(200);
    })

}

async function assetView(req,res){
    try{
        let data = await models.Asset.getAll();

        console.log(data);
        res.json(data);

    }
    catch{
        console.log("error");
    }
}

module.exports = {
    addAsset,
    assetView
}
