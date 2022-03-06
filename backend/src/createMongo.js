var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://cmdf2022:q7R2Gdm3kSM1JFXV@cluster0.8pqpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Successfully connected to database!");
  db.close();
});