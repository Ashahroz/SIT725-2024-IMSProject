let model = require('../model/model');

const addData = (req,res) =>{
    let data = req.body;
    model.addData(data, (err,result) =>{
        if(err){
            res.json({ statusCode: 400, message: err });
        }
        else {
            res.json({ statusCode: 200, message: 'Successfully added' });
        }
    });
}

const getAllOrders = (req,res) =>{
    model.getAllOrders((err,result) =>{
        if(err){
            res.json({ statusCode: 400, message: err });
        }
        else{
            res.json({ statusCode: 200, data:result, message: 'Successfully fetched' });
        }
    });
}

const addStockData = (req,res) =>{
    let stockdata = req.body;
    model.addStockData(stockdata, (err,result) => {
        if(err) {
            res.json({ statusCode: 400, message: err });
        }
        else{
            res.json({ statusCode: 200, message: 'Successfully added' });
        }
    });
}

const getAllStockData = (req,res) =>{
    model.getAllStockData((err, result) =>{
        if (err) {
            res.json({ statusCode: 400, message: err });
        }
        else {
            res.json({ statusCode: 200, data: result, message: 'Successfully fetched' });
        }
    });
}
const deleteOrderDataByItemId = (req,res) =>{
    let itemId = req.body;
    model.deleteOrderDataByItemId(itemId, (err, result) =>{
        if (err){
            res.json({ statusCode: 400, message: err });
        }
        else{
            res.json({ statusCode: 200, message: 'Successfully Deleted' });
        }
    });
    
}
const deleteStockDataByItemId = (req,res) =>{
    let itemId = req.body;
    model.deleteStockDataByItemId(itemId, (err, result) =>{
        if(err){
            res.json({ statusCode: 400, message: err });
        }
        else{
            res.json({ statusCode: 200, message: 'Successfully Deleted' });
        }
    });
}
const generateSalesReport = (req,res) =>{
    let category = req.body;
    model.generateSalesReport(category, (err, result) =>{
        if(err){
            res.json({ statusCode: 400, message: err });
        }
        else{
            res.json({ statusCode: 200, data: result, message: 'Successfully fetched' });
        }
    });
}

const login = (req,res) =>{
    let loginData = req.body;
    model.login(loginData, (err, result) =>{
        if(err){
            res.json({ statusCode: 400, message: err });
        }
        else{
            
            var username = result[0].username;
            var password = result[0].password;
            if(username == undefined || password == undefined){
                res.json({ statusCode: 200, message: 'login Failed' });
            }
            else if((loginData.username == username ) && (loginData.password == password)){
                console.log("Logged In");
                res.json({ statusCode: 200, message: 'Successfully logged in' });
            }
            
            
        }
    });
}
module.exports = { login, generateSalesReport,deleteOrderDataByItemId, deleteStockDataByItemId , addData, getAllOrders, addStockData, getAllStockData }