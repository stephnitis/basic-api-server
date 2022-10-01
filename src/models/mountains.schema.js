'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('mountains', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tripType: {
      type: DataTypes.ENUM,
      values: ['day hike', 'backpack', 'mountaineering'],
      allowNull: true,
    },
  });
};
