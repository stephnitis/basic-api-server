'use strict';

const { sequelizeDatabase, MountainModel, ParkModel } = require('./src/models');
const {start} = require('./src/server');

sequelizeDatabase.sync()
  .then(() => console.log('Successful Connection!'))
  .catch(err => console.error(err));

start();
