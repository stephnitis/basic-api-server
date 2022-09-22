'use strict';

const express = require('express');
const { MountainModel } = require('../src/models');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());

app.post('/mountains', (req, res, send) => {
  console.log('req body', req.body);

  const newMountain = MountainModel.create(req.body);
  res.status(200).send(newMountain);
});

function start(){
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = {app, start};
