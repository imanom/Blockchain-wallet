

var Transaction = require('../models/transactions');
var request = require('request');

const Web3 = require('web3')
const httpProvider = "https://kovan.infura.io/v3/6c6f87a10e12438f8fbb7fc7c762b37c"
var web3 = new Web3(new Web3.providers.HttpProvider(httpProvider));
var count =0;



/* This API gets the Transaction count for a particular Block, if we provide the Block Hash.  */

exports.getBlock = (req,res) =>{
//1757201
//0x00d6cc1ba9cf89bd2e58009741f4f7325badc0ed
    web3.eth.getTransactionCount("0x00d6cc1ba9cf89bd2e58009741f4f7325badc0ed",function(error, result){
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

/* The function below performs the same task as the above API. Was just trying something out.  */

function getBlock(Blockhash){
    web3.eth.getTransactionCount(Blockhash,function(error, result){
        if(!error){
            count = result;
            console.log('Number of transactions in latest block: ',JSON.stringify(result));
        }
            
        else{
            console.error(error);
           
        }
            
     });
}


/* The below API performs three tasks:

    1. gets the latest block number.
    2. gets the Block Hash of the latest block using the block number received in Step 1.
    3. Originally meant to index transactions of the latest blocks, 
        but because of an error "Ancient block sync is still in progress",
        I am indexing blocks from the block number "1757201".
    4. I've looped over 2000 transactions because every time I run the loop for 10000, 
        my system crashes and I have to restart again.

*/


exports.getBlockLatest = (req, res) => {
    //getBlock("0x00d6cc1ba9cf89bd2e58009741f4f7325badc0ed")
    web3.eth.getBlockNumber(function(error, result){ 
        if (!error){
            console.log('Latest Block number is: ',JSON.stringify(result));
            web3.eth.getBlock(result, function(error2, result2){
                        if(!error2){
                            console.log('Hash of latest Block number is: ',JSON.stringify(result2.author));
                           // var txcount = getBlock(result2.author);
                            // web3.eth.isSyncing(function(error22, result22){
                            //     if(!error22)
                            //         console.log(result22); 
                            // });
                           getBlock(result2.author)
                        }
                        })
                        .then(function(result2) {
                            
                           //  console.log(count);
                           //console.log(result2.number);
                          // setTimeout(() => {
                          for(var j=0;j<100;j++){
                               //getBlock(result2.author);
                            //  setTimeout(() => {
                               
                              
                                   // console.log('RES! ',count)
                                    for(var i=1;i<=20;i++){
                                        web3.eth.getTransactionFromBlock(1757201+j+1,i, function(error3, result3){
                                            if(!error3){
                                            // console.log('3: ',JSON.stringify(result3));
                                                var data = new Transaction({
                
                                                from: result3.from,
                                                to: result3.to,
                                                blockNumber: result3.blockNumber,
                                                transactionHash: result3.hash,
                                               
                                                })
                                                data.save()
                                                    .then(text => {
                                                        //res.send(text);
                                                        console.log('i:',i);
                                                    })
                                                    .catch(err => {
                                                        // res.status(500).send({
                                                        //     message: err.message
                                                        // })
                                                    });
                                        }
                                            
                                        // else
                                        //     console.log(error3);
                                     });
                                    }
                               
                             //  },5000);
                              
                            
                        }
                   // },5000);
                           // console.log(JSON.stringify(result2));
                    //     else
                    //         console.error(error2);
                    //  //});
                    })
                    .then(function() {
                        console.log("End!!!!!!!")
                    })
        }
         
      });
    
}





/* Gets the transaction Details of the user, provided the user hash   */
  
exports.getTransactions = (req, res) => {
    Transaction.find({from:req.body.user}).then(function(result) {
        console.log(JSON.stringify(result));

        res.send(JSON.stringify(result));
    })
}