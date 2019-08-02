module.exports = (app)=>{
    
    var controller = require('../controllers/controller');


    app.get('/getBlock',controller.getBlock);
    app.post('/getTransactions',controller.getTransactions);
    app.get('/getBlockLatest', controller.getBlockLatest);

    var cors = require('cors');
    app.use(cors());
}