// implement your server here
// require your posts router and connect it here
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const server = express();

const postRouter = require('./posts/posts-router');

server.use(express.json());

server.use('/api/posts', postRouter);


server.use('*', (req, res) => {
  res.status(404).send(`
    <p>Sorry!! Cant find that resource</p>
  `);
});

module.exports = server;
