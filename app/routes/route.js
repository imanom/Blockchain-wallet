module.exports = (app)=>{
    
    var controller = require('../controllers/controller');


    app.get('/getBlock',controller.getBlock);
    app.post('/billingDetails',controller.billingDetails);
    app.get('/getBlockLatest', controller.getBlockLatest);

    var cors = require('cors');
    app.use(cors());
}