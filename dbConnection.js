//Importing the MongoClient
const { MongoClient } = require('mongodb');

//Defining the MongoDB connection URI
const uri = 'mongodb+srv://aimanshahroz94:4jMdbDyn28DLRfqz@cluster0.qav2cmu.mongodb.net/?retryWrites=true&w=majority';

//Creating a new MongoClient instance
const client = new MongoClient(uri);

//Connecting to the MongoDB database
client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

//Exporting the MongoClient instance
module.exports = client;