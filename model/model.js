let client = require('../dbConnection'); //importing the database connection

//Accessing MongoDB collections

let collection_ims = client.db('ims').collection('ims'); 
let Collection_addData = client.db('ims').collection('adddata');
let Collection_addStockData = client.db('ims').collection('addstockdata');

//Defining database operations functions

//addData function
function addData(data, callback) {
    Collection_addData.insertOne(data,callback);
}

//getAllOrders Function
function getAllOrders(callback) {
    Collection_addData.find().toArray(callback);
}

//addStockData Function
function addStockData(stockdata, callback){
    Collection_addStockData.insertOne(stockdata,callback);
}

//getAllStockData Function
function getAllStockData(callback){
    Collection_addStockData.find().toArray(callback);
}

//deleteOrderDataByItemId Function 
function deleteOrderDataByItemId(itemId, callback){
    Collection_addData.deleteOne(itemId,callback);
}

//deleteStockDataByItemId Function
function deleteStockDataByItemId(itemId, callback){
    Collection_addStockData.deleteOne(itemId,callback);
}

//generateSalesReport Function
 function generateSalesReport(category, callback){
     Collection_addData.find(category).toArray(callback);
}

//login Function
function login(loginData, callback){
    collection_ims.find(loginData).toArray(callback);
    console.log("here")
}

//Exporting the Model Functions
module.exports = { login, generateSalesReport,deleteOrderDataByItemId, deleteStockDataByItemId, addData, getAllOrders, addStockData, getAllStockData}