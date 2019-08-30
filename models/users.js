'use strict';
const db = require('../models');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        Age: DataTypes.DECIMAL(10, 1),
        Location: DataTypes.STRING,
        Income: DataTypes.DECIMAL(10, 1),

    }, {});
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(models.Budget);
    };

    User.prototype.validatePassword = function (value){
        return this.password === value;
    }
    return User;
};