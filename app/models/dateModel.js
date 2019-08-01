var mongoose = require('mongoose');
var dateSchema = mongoose.Schema({
    name:String,
    date:String
});
module.exports = mongoose.model('Date',dateSchema);