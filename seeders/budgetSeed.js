'use strict';

const csvFilePath = './data/userBudget.csv';
const csv = require('csvtojson');


module.exports = {
    up: async (queryInterface, Sequelize) => {

        let data = await csv().fromFile(csvFilePath);
        data = data.map(Budget => {
            let date = new Date();
            return {
                ...Budget,
                createdAt: date,
                updatedAt: date
            }
        })
        return queryInterface.bulkInsert('Budgets', data, {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};