'use strict';

const express = require('express');
const { MountainModel } = require('../models');

const router = express.Router();

router.post('/mountains', async (req, res, send) => {
  console.log('req body', req.body);

  const newMountain = await MountainModel.create(req.body);
  res.status(200).send(newMountain);
});

module.exports = router;
