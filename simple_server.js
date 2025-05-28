// Import the built-in 'fs' module for file system operations (not used here but maybe for later use)
const fs = require("fs");

// Import the built-in 'http' module to create a web server
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log every incoming request to the console
  console.log(req);

  // Send a response back to the client
  res.end("Hello From the server! ");
});

// Tell the server to listen on port 8000 and localhost (127.0.0.1)
server.listen(8000, "127.0.0.1", () => {
  // Log this once the server starts successfully
  console.log("Listening to port 8000");
});
