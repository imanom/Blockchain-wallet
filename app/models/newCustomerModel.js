var mongoose = require('mongoose');
var newCustomerSchema = mongoose.Schema({
    purpose: String,
    businessType: String,
    noOfLocations: Number,
    numberOfEmployees: Number,
    firstName: String,
    enterpriseName: String,
    email: String,
    city: String,
    mobile:Number,
    country: String
},{
    timeStamps:true
});

module.exports = mongoose.model('NewCustomer',newCustomerSchema);