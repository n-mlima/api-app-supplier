const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
   "/*": "/$1",
  })
 );
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});


// Export the Server API
module.exports = server;