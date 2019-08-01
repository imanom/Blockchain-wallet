var mongoose = require('mongoose');

var bundleSchema = mongoose.Schema({

    id:{ type: String, unique:true, dropDups:true },
    segment:String,
    productLine:String,
    model:String
    
},{
    timeStamps:true
});

module.exports = mongoose.model('Bundles',bundleSchema,'Bundles');