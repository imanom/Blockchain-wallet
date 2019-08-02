

var Transaction = require('../models/transactions');
var request = require('request');

const Web3 = require('web3')
const httpProvider = "https://kovan.infura.io/v3/6c6f87a10e12438f8fbb7fc7c762b37c"
var web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));

exports.getBlock = (req,res) =>{
//1757201
    web3.eth.getTransactionCount("0xfe9e1006910ec7975c9bc2575e0f5b36bf26074da5a511e3bab664417a517cda",function(error, result){
            if(!error)
                console.log(JSON.stringify(result));
            else
                console.error(error);
         });
   // console.log(transaction);
// web3.eth.getBlock(100, function(error, result){
//     if(!error)
//         console.log(JSON.stringify(result));
//     else
//         console.error(error);
//  })

}

exports.getBlockLatest = (req, res) => {

    web3.eth.getBlockNumber(function(error, result){ 
        if (!error){
            web3.eth.getBlock(result, function(error2, result2){
                        if(!error2){
                            // web3.eth.isSyncing(function(error22, result22){
                            //     if(!error22)
                            //         console.log(result22); 
                            // });

                             
                            console.log(result2.number);
                          //  for(var i=0;i<10;i++){
                                web3.eth.getTransactionFromBlock(1757201,2, function(error3, result3){
                                    if(!error3){
                                     console.log(JSON.stringify(result3));
                                        // var data = new Transaction({
        
                                        // from: result3.from,
                                        // to: result3.to,
                                        // blockNumber: result3.blockNumber,
                                        // transactionHash: result3.transactionHash,
                                       
                                        // })
                                        // data.save()
                                        //     .then(text => {
                                        //         res.send(text);
                                        //     })
                                        //     .catch(err => {
                                        //         res.status(500).send({
                                        //             message: err.message
                                        //         })
                                        //     });
                                }
                                    
                                else
                                    console.error(error3);
                             });
                          //  }
                        }
                           // console.log(JSON.stringify(result2));
                        else
                            console.error(error2);
                     });
        }
         // console.log("block number => ",result)
      });
    // console.log(web3.eth.blockNumber);
    // web3.eth.getBlock(web3.eth.blockNumber, function(error, result){
    //         if(!error)
    //             console.log(JSON.stringify(result));
    //         else
    //             console.error(error);
    //      });

// const blockNumbers = _range(latest - 10, latest + 1, 1)
// const batch = new web3.eth.BatchRequest()

// blockNumbers.forEach((blockNumber) => {
//     console.log(blockNumber);
//   batch.add(
//     web3.eth.getBlock.request(blockNumber, storeLocalCopy)
//   )
// })

// batch.execute()
}
  
exports.billingDetails = (req, res) => {
    var data = new Bill({
        
    enterpriseName: req.body.enterprise,
    registrationNumber: req.body.registration,
    address: req.body.address,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    enterpriseName_shipping: req.body.enterprise,
    registrationNumber_shipping: req.body.registration,
    address_shipping: req.body.address,
    city_shipping: req.body.city,
    zip_shipping: req.body.zip,
    country_shipping: req.body.country,
    preferredDate: req.body.datepick,
    firstName: req.body.fname,
    lastName: req.body.sname,
    role: req.body.role,
    id: req.body.id,
    mobile: req.body.mobile,
    email: req.body.email
    })
    data.save()
        .then(text => {
            res.send(text);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        });
}