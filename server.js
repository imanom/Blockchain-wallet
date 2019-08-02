var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbconfig = require('./config/database.config');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.url,{useNewUrlParser:true})
.then(()=>{
    console.log("connected to database");
})
.catch(err =>{
    console.log("error : "+err);
    process.exit();
});

require('./app/routes/route')(app);

app.get('/',(req,res)=>{
    res.send("accessible");
})

app.listen(3000,()=>{
    console.log("app listening on 3000");
});