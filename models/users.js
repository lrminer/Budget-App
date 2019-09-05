'use strict';
const db = require('../models');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        Age: DataTypes.DECIMAL(10, 1),
        Location: DataTypes.STRING,
        Income: DataTypes.DECIMAL(10, 1),

    }, {});
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(models.Budget)
    };
    return User;
};