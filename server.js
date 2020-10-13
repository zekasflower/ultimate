const StaticServer = require("static-server");
const server = new StaticServer({
  rootPath: "./dist/",
  port: 8080,
});

server.start(function () {
  console.log("Server started at port " + server.port);
});
