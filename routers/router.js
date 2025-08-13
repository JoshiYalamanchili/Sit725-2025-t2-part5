let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postcric(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllcric(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllcric(req,res);
});


module.exports = router;