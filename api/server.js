// implement your server here
// require your posts router and connect it here
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const postsRouter = require('./posts/posts-router')

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter)

server.use('*', (req, res) => {
  res.status(404).json({
      message: 'Error: Not found!'
  })
});

module.exports = server;
