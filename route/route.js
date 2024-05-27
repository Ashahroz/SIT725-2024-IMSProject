//importing Express and creating a router

var express = require('express');
var router = express.Router();

//Importing the controller module

let controller = require('../contoller/controller'); 

//Defining route handlers

// /login POST route
router.post('/login', (req,res) =>{
    controller.login(req,res);
});

// /home GET route
router.get('/home', (req,res) =>{
    res.render('home');
});

// /addorder GET route
router.get('/addorder', (req, res) => {
    res.render('addorder');
});

// /adddata POST route
router.post('/adddata', (req,res) =>{
    controller.addData(req,res);
});

// /vieworder GET route
router.get('/vieworder', (req,res) => {
    res.render('vieworder');
});

// /getallorders GET route
router.get('/getallorders', (req,res) =>{
    controller.getAllOrders(req, res);
});

// /addstock GET route
router.get('/addstock', (req,res)=>{
    res.render('addstock');
});

// /addstockdata POST route
router.post('/addstockdata', (req,res) =>{
    controller.addStockData(req,res);
});

// /viewstock GET route
router.get('/viewstock', (req,res) =>{
    res.render('viewstock');
});

// /getallstockdata GET route
router.get('/getallstockdata', (req,res) =>{
    controller.getAllStockData(req,res);
});

// /deleteorder route
router.delete('/deleteorder', (req,res) =>{
    controller.deleteOrderDataByItemId(req,res);
});

// /deletestock route
router.delete('/deletestock', (req,res) =>{
    controller.deleteStockDataByItemId(req,res);
});

// /salesreport GET route
router.get('/salesreport', (req,res) =>{
    res.render('salesreport');
});

// /generatesalesreport POST route
router.post('/generatesalesreport', (req,res) =>{
    controller.generateSalesReport(req,res);
});

//Exporting the router
module.exports = router;