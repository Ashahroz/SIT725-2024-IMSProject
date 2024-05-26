var expect = require("chai").expect;
var request = require("request");
var addDataUrl = "http://localhost:3000/adddata";
var getDataUrl = "http://localhost:3000/getallorders";
var addStockDataUrl = "http://localhost:3000/addstockdata";
var getStockDataURL = "http://localhost:3000/getallstockdata";
var deleteStockDataUrl= "http://localhost:3000/deletestock";
var deletedOrderDataUrl = "http://localhost:3000/deleteorder";
let addorder = {
    "item_id": "600",
    "customer_name": "test customer",
    "category": "test Category",
    "brand": "test Brand",
    "size": "test size",
    "total_amount": "3000",
    "phone_number": "000"
}

let addStockData = {
    "item_id": "700",
    "item_name": "test stock data",
    "brand_name": "test stock brand name",
    "size": "test stock size",
    "total_amount": "5000"
}

describe('GET Request', function () {
    it('returns status 200 to check if api works', function (done) {
        request(getDataUrl, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it('returns data from DB', function (done) {
        request(getDataUrl, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('Post a order', function () {
    it('insert a order data to database', function (done) {
        request.post({ url: addDataUrl, form: addorder }, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('added');
            done();
        });
    });
});

describe('Post a stock data', function () {
    it('insert a stock data to database', function (done) {
        request.post({ url: addStockDataUrl, form: addStockData }, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('added');
            done();
        });
    });
});

describe('GET Request', function () {
    it('returns status for stock data 200 to check if api works', function (done) {
        request(getStockDataURL, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it('returns stock data from DB', function (done) {
        request(getStockDataURL, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});


describe('Delete order data', function () {
    it('Delete a order data from database', function (done) {
        request.delete({ url: deletedOrderDataUrl, form: addorder }, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('Successfully Deleted');
            done();
        });
    });
});


describe('Delete stock data', function () {
    it('Delete a stock data from database', function (done) {
        request.delete({ url: deleteStockDataUrl, form: addStockData }, function (error, response, body) {
            body = JSON.parse(body);
            expect(body.message).to.contain('Successfully Deleted');
            done();
        });
    });
});

