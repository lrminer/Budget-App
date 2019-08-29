'use strict';
module.exports = (sequelize, DataTypes) => {
    const Budget = sequelize.define('Budget', {
        userID: DataTypes.STRING,
        Grocery: DataTypes.DECIMAL(10, 1),
        Dine_Out: DataTypes.DECIMAL(10, 1),
        Alcohol: DataTypes.DECIMAL(10, 1),
        Housing: DataTypes.DECIMAL(10, 1),
        Apparel_and_services: DataTypes.DECIMAL(10, 1),
        Transportation: DataTypes.DECIMAL(10, 1),
        Health_care: DataTypes.DECIMAL(10, 1),
        entertainment: DataTypes.DECIMAL(10, 1),
        Personel_care: DataTypes.DECIMAL(10, 1),
        Education: DataTypes.DECIMAL(10, 1),
        Miscallaneous: DataTypes.DECIMAL(10, 1),
        Donations: DataTypes.DECIMAL(10, 1),
        Insurance: DataTypes.DECIMAL(10, 1)
    }, {});
    Budget.associate = function (models) {
        Budget.hasOne(User, { foreignKey: userID })
    };
    return Budget;
};