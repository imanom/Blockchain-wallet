var bundle = require('../models/productBundle');


exports.setupData = (req, res) =>{

console.log("entering product bundles");

      
        starterdata = [
           
            {
                id: "INF_001",
                segment: "SME",
                productLine: "infrastructureSecurity",
                model: "securityServices"
            },
            {
                id: "INF_002",
                segment: "SME",
                productLine: "infrastructureSecurity",
                model: "securityServices"
            },
            {
                id: "INF_003",
                segment: "SME",
                productLine: "infrastructureSecurity",
                model: "securityServices"
            },
            {
                id: "SDW_001",
                segment: "SME",
                productLine: "sDWAN",
                model: "SDWANOffer"
            },
            {
                id: "SDW_002",
                segment: "SME",
                productLine: "sDWAN",
                model: "SDWANOffer"
            },
            {
                id: "SDW_003",
                segment: "SME",
                productLine: "sDWAN",
                model: "SDWANOffer"
            },
            {
                id: "SDW_004",
                segment: "SME",
                productLine: "sDWAN",
                model: "SDWANOffer"
            },
            {
                id: "SDW_005",
                segment: "SME",
                productLine: "sDWAN",
                model: "SDWANOffer"
            },
            {
                id: "SDW_006",
                segment: "SME",
                productLine: "sDWAN",
                model: "SDWANOffer"
            },
        ];


        

        bundle.collection.insertMany(starterdata, function (err, results) {
            if (err) throw err;

            console.log(results);
        });

    
}