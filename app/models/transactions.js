var mongoose = require('mongoose');

var txSchema = mongoose.Schema({

    from:String,
    to:String,
    blockNumber:String,
    transactionHash:String,
    
},{
    timeStamps:true
});

module.exports = mongoose.model('Transaction',txSchema,'Transaction');