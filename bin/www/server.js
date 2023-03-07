/** @format */
const http = require('http');
const app = require('../../app');

// Get port from environment and store in Express.
const port = process.env.PORT || '4000';

// Create HTTP server.
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
