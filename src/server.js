'use strict';

const express = require('express');
const mountainsRouter = require('./routes/mountains.route');
const parksRouter = require('./routes/parks.route');
const logger = require('./middleware/logger');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(mountainsRouter);
app.use(parksRouter);
app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('hello');
});

app.get('/bad', (req, res, next) => {
  next('this route is bad');
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = {app, start};
