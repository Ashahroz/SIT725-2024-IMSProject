const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://aimanshahroz94:4jMdbDyn28DLRfqz@cluster0.qav2cmu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

module.exports = client;