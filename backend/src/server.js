const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

const io = require('socket.io')(server, {
    cors: {
        origins: ["*"]
    }
});

const connectedUsers = {};

io.on('connection', (socket) => {
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv:...', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((request, response, next) => {
    request.io = io;
    request.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);