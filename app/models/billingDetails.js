var mongoose = require('mongoose');
var billingSchema = mongoose.Schema({
    enterpriseName:String,
    registrationNumber:String,
    address:String,
    city:String,
    zip:Number,
    country:String,
    enterpriseName_shipping:String,
    registrationNumber_shipping:String,
    address_shipping:String,
    city_shipping:String,
    zip_shipping:Number,
    country_shipping:String,
    preferredDate: Date,
    firstName:String,
    lastName:String,
    role:String,
    id:Number,
    mobile:Number,
    email:String
},{
    timeStamps:true
});

module.exports = mongoose.model('BillingDetails',billingSchema,'BillingDetails');