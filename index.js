'use strict';

const { sequelizeDatabase, MountainModel } = require('./src/models');

sequelizeDatabase.sync()
  .then(() => console.log('Successful Connection!'))
  .catch(err => console.error(err));
