'use strict';

const express = require('express');
const { MountainModel } = require('../models');

const router = express.Router();

router.get('/mountains', async (req, res, next) => {

  const getMountains  = await MountainModel.findAll();
  console.log(getMountains);
  res.status(200).send(getMountains);

});

// router.get('/mountains', async (req, res, next) => {

//   const getOneMountain  = await MountainModel.findOne({
//     order: [
//       ['name'],
//       ['summit'],
//       ['tripType'],
//     ],
//   });
//   console.log(getOneMountain);
//   res.status(200).send(getOneMountain);

// });

router.post('/mountains', async (req, res, send) => {
  console.log('mtn req body', req.body);

  const newMountain = await MountainModel.create(req.body);
  res.status(200).send(newMountain);
});

// router.delete('/mountains/:id', async (req, res) => {
//   MountainModel.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
// });

module.exports = router;
