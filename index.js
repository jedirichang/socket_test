var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socketClient;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});


io.on('connection', function (socket) {
    socketClient=socket;
    console.log('User connected')
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
