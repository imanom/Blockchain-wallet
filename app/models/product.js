var mongoose = require('mongoose');

var productSchema = mongoose.Schema({

    displayName:String,
    description:String,
    longDescription:String,
    addOnProducts:String,
    listPrice:String,
    type:String,
    id:{ type: String, unique:true, dropDups:true },
    orderLimit:String,
    parentCategories:String,
    seoKeywordsDerived:String,
    active:String,
    route:String,
    salePrice:String,
    brand:String
},{
    timeStamps:true
});

module.exports = mongoose.model('Products',productSchema,'Products');