const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const StudentVue = require('studentvue.js');

const app = express();
const server = createServer(app);
const io = new Server(server);

/*app.use('/', (req, res) => {
  res.sendFile(join(__dirname, "/static"));
});*/

app.use(express.static(__dirname + "/static"));

server.listen(8080, () => {
  console.log('[server started]');
});

io.on('connection', (socket) => {
  socket.on('checkLogin', (district, username, password) => {
    try {
      StudentVue.login(district, username, password).then((client = {}) => {
        io.to(socket.id).emit("alert", "success")
        
      }).catch((err) => {
        io.to(socket.id).emit("alert", "el error")
      })
    }
    catch (err) {
      io.to(socket.id).emit("alert", "el error")
    }
  });
});