var MongoClient= require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://Reshma:reshma0297@ds111478.mlab.com:11478/projector02").then(function(client){
    console.log("Connected to mongodb");
    exports.database=client.db("projector02");
    console.log("hello");
  });
}
