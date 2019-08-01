module.exports = (app)=>{
    
    var controller2 = require('./../controllers/controller2');


    app.get('/getBlock',controller2.getBlock);
    app.post('/billingDetails',controller2.billingDetails);
    app.get('/getBlockLatest', controller2.getBlockLatest);

    var cors = require('cors');
    app.use(cors());
}