var mongoose = require('mongoose');
var navbarSchema = mongoose.Schema({
    menu:[{name:String,menu:[{name:String,menu:[{name:String,menu:[{name:String}]}]}]}]
});
module.exports = mongoose.model('Navbar',navbarSchema);