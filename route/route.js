var express = require('express');
var router = express.Router();
let controller = require('../contoller/controller'); 

router.post('/login', (req,res) =>{
    controller.login(req,res);
});

router.get('/home', (req,res) =>{
    res.render('home');
});

router.get('/addorder', (req, res) => {
    res.render('addorder');
});

router.post('/adddata', (req,res) =>{
    controller.addData(req,res);
});

router.get('/vieworder', (req,res) => {
    res.render('vieworder');
});

router.get('/getallorders', (req,res) =>{
    controller.getAllOrders(req, res);
});
router.get('/addstock', (req,res)=>{
    res.render('addstock');
});

router.post('/addstockdata', (req,res) =>{
    controller.addStockData(req,res);
});

router.get('/viewstock', (req,res) =>{
    res.render('viewstock');
});

router.get('/getallstockdata', (req,res) =>{
    controller.getAllStockData(req,res);
});

router.delete('/deleteorder', (req,res) =>{
    controller.deleteOrderDataByItemId(req,res);
});
router.delete('/deletestock', (req,res) =>{
    controller.deleteStockDataByItemId(req,res);
});

router.get('/salesreport', (req,res) =>{
    res.render('salesreport');
});

router.post('/generatesalesreport', (req,res) =>{
    controller.generateSalesReport(req,res);
});
module.exports = router;