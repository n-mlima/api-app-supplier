const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Importe o middleware cors
const cors = require("cors");

server.use(middlewares);

// Adicione o middleware cors para permitir solicitações de todas as origens
server.use(cors());

server.use(jsonServer.rewriter({
  "/*": "/$1",
}));

server.use(router);

// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Exporte a API do servidor
module.exports = server;

