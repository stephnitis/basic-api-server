'use strict';

const { sequelizeDatabase, MountainModel } = require('./src/models');
const {start} = require('./src/server');

sequelizeDatabase.sync()
  .then(() => console.log('Successful Connection!'))
  .catch(err => console.error(err));

start();
