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


// const soapRequest = require('easy-soap-request');
// const fs = require('fs');
// var auth = "Basic "+new Buffer("admin"+":"+"Osmadmin@123").toString("base64");

// // example data
// const url = 'http://52.206.138.129:8001/OrderManagement/wsapi';
// const headers = {
//   'user-agent': 'sampleTest',
//   'Content-Type': 'text/xml;charset=UTF-8',
//   'soapAction': './Order_Status/SOAP.wsdl',
//     'Authorization': auth
// };
// const xml = fs.readFileSync('./Order_Status/FindOrderRequest.xml', 'utf-8');

// // usage of module
// (async () => {
//   const { response } = await soapRequest(url, headers, xml, 5000); // Optional timeout parameter(milliseconds)
//   const { body, statusCode } = response;
// //   console.log(body);

//   console.log(statusCode);
// })();

require('./app/routes/route')(app);

app.get('/',(req,res)=>{
    res.send("accessible");
})

app.listen(3000,()=>{
    console.log("app listening on 3000");
});