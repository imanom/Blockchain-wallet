var mongoose = require('mongoose');
var customerSchema = mongoose.Schema({
    enterpriseName:String,
    registrationNumber:String,
    address:String,
    city:String,
    zip:Number,
    country:String,
    businessNature:String,
    numberOfEmployees:Number,
    firstName:String,
    surName:String,
    role:String,
    id:Number,
    mobile:Number,
    comments:String,
    purpose:String,
    businessType:String,
    noOfLocations:Number,
    email:String
},{
    timeStamps:true
});

module.exports = mongoose.model('Customer',customerSchema);