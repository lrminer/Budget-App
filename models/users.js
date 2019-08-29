'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userID: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        Age: DataTypes.DECIMAL(10, 1),
        Location: DataTypes.STRING,
        Income: DataTypes.DECIMAL(10, 1),

    }, {});
    User.associate = function (models) {
        // associations can be defined here
        User.hasMany(Budget, { foreignKey: userID })
    };
    return User;
};