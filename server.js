//Importing the required libraries
var express = require('express');
var app = express();

//Establishing database connection
require('./dbConnection');

//Importing router
let router = require('./route/route');

//Creating an HTTP server
let http = require('http').createServer(app);

//Configuring static files and view engine
app.use(express.static(__dirname + '/views'));
app.set('view engine','ejs');

//Initializing Socket.IO
let io = require('socket.io')(http);

//Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

//Routing requests to the router module
app.use('/', router);

//Socket.IO event handlers
io.on('connection', (socket) => {
    console.log('a client is connected'); // Socket.IO event handlers for client connections, disconnections, and data exchange

    // Set a flag to track client activity
    let clientActive = false;

    // Emit initial data
    socket.emit('total_amount', 5633);
    socket.emit('total_order', 12);
    socket.emit('total_stock', 98);
    socket.emit('stock_value', 36982);

    // Function to reset client activity flag
    const resetClientActivity = () => {
        clientActive = true;
    };

    // Start a heartbeat interval
    const heartbeatInterval = setInterval(() => {
        if (!clientActive) {
            // If client is inactive, disconnect the client
            socket.disconnect();
            clearInterval(heartbeatInterval); // Stop the heartbeat interval
        }
        clientActive = false; // Reset the client activity flag
    }, 5000); // Interval in milliseconds (5 seconds)

    // Event listener for client activity
    socket.on('clientActivity', () => {
        // Reset the client activity flag
        resetClientActivity();
    });

    // Event listener for client disconnection
    socket.on('disconnect', () => {
        console.log('user disconnected');
        clearInterval(heartbeatInterval); // Stop the heartbeat interval if client disconnects
    });
});

//Listening on a port
var port = process.env.port || 3000;

http.listen(port, () => {
    console.log('app listening to: ' + port);
});
