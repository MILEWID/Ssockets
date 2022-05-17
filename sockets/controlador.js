
// express 
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);

//socket.io
const { Server } = require('socket.io');
const { arrayofObjects } = require('./model/consultas');
const io = new Server(server)


var publicPath = path.resolve(__dirname, 'view');
app.use(express.static(publicPath));


io.on('connection', (socket) => {
  socket.on('chat', (msg) => {
    io.emit('chat', msg);
    let resp = buscar(msg);
    let resp2 = buscar2(msg);
    console.log(resp);
    io.emit('respose', resp);
    io.emit('respose2', resp2);
  })
})

app.get('/', (req, res) => {

  //ruta donde ets aekl proyecto 
  res.sendFile(`${__dirname}/view/index.html`);
})
server.listen(3000, () => {
  console.log("server corriendo");
});


function buscar(msge) {
  let respu;
  arrayofObjects.find(object => {
    if (object.preg == msge.toLowerCase()) {
      respu = object.resp;
      return respu;
    }
    else {
      respu = "No puedo entenderte prueba con otra frase ";
    }

  });
  return respu;
}

function buscar2(msge) {
  let respu;
  arrayofObjects.find(object => {
    if (object.preg == msge.toLowerCase()) {
      respu = object.resp2;
      return respu;
    }
    else {
      respu = "Intenta de nuevo con las opciones de  arriba";
    }

  });
  return respu;
}

