// implement your server here
// require your posts router and connect it here
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const server = express();

const usersRouter = require('./posts/posts-router');

server.use(express.json());

server.use('/api/posts', usersRouter);


server.use('*', (req, res) => {
  res.status(404).send(`
    <p>Cant find that resource</p>
  `);
});

module.exports = server;
