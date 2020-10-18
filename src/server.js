const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static('public'));

server
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs');

server
  .get('/', pages.index)
  .get('/orphanages', pages.orphanages)
  .get('/orphanage', pages.orphanage)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage);

server.listen(5500);