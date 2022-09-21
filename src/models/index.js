'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const mountainSchema = require('./mountains.schema');

const DATABASE_URL = process.env.DATABASE_URL;

// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite:memory'
//   : process.env.DATABASE_URL;
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const MountainModel = mountainSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, MountainModel};
