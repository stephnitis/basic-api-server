'use strict';

const express = require('express');
const mountainsRouter = require('./routes/mountains.route');
const parksRouter = require('./routes/parks.route');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(mountainsRouter);
app.use(parksRouter);

function start(){
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = {app, start};
