const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(52273);

app.get('/',(req,res) => {
    res,sendFile(__diename + '/index.html');
});

io.on('connection',(socket) => {
    socket.emit('news',{
        hello: 'world'
    });
    socket.on('other event',(data) => {
        console.log(data);
    });
});
