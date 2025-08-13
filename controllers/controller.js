let collection = require('../models/cric');

const postcric = (req,res) => {
    let cric = req.body;
    collection.postcric(cric, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllcric = (req,res) => {
    collection.getAllcric((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deletecric = (req,res) => {
    let cric = req.body;
    collection.deleteOne(cric, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postcric,getAllcric}