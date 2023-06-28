// ================== biblioteca ============
var mongoose = require("mongoose");

var mongoDB_URI = "mongodb://127.0.0.1:27017/web-t03";


// ================== conectando ============
mongoose.connect(mongoDB_URI, { useNewUrlParser: true});

var db = mongoose.connection;


// ================== eventos ============

db.on("connected", 
    ()=>
        console.log("Mongoose default connection is open to ", mongoDB_URI)
);

db.on("disconnected",
    ()=>
        console.log("Mongoose default connection is disconnected")
);

db.on("error",
    (err)=>
        console.log("Mongoose default connection has occured "+err+" error")
);
