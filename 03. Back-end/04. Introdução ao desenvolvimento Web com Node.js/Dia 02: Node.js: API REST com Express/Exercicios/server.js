// src/server.js

const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));

module.exports = app;
// // src/server.js