'use strict';

const express = require('express');
const { MountainModel } = require('../models');

const router = express.Router();

router.get('/mountains', async (req, res, next) => {

  const getMountains  = await MountainModel.findAll();
  console.log(getMountains);
  res.status(200).send(getMountains);

});

router.get('/mountains/:id', async (req, res, send) => {
  let {id} = req.params;
  console.log('my id is', id);
  let oneMountain = await MountainModel.findOne({where: {id}});

  console.log(oneMountain);
  res.status(200).send(oneMountain);
});

router.post('/mountains', async (request, response, send) => {
  console.log('mtn req body', request.body);

  const newMountain = await MountainModel.create(request.body);
  response.status(200).send(newMountain);
});

router.put('/mountains/:id', async (req, res, send) => {
  let {id} = req.params;
  await MountainModel.update(req.body, {where: {id}});
  let mountainUpdate = await MountainModel.findOne({where: {id}});
  res.status(200).send(mountainUpdate);

});

router.delete('/mountains/:id', async (req, res, next) => {
  try {
    let {id} = req.params;
    await MountainModel.destroy({
      where: {id},
    });
    res.status(200).send('mountain deleted');
  } catch(err){
    next(err);
  }

});

module.exports = router;
