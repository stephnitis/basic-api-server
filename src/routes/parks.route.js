'use strict';

const express = require('express');
const { ParkModel } = require('../models');

const router = express.Router();

router.get('/parks', async (req, res, next) => {

  const parks  = await ParkModel.findAll();
  console.log(parks);
  res.status(200).send(parks);

});

router.post('/parks', async (req, res, send) => {
  console.log('parks req body', req.body);

  const newPark = await ParkModel.create(req.body);
  res.status(200).send(newPark);
});

module.exports = router;
