const db = require('../models');

module.exports = function (app) {
    // Used for looking at all users
    app.get('/api/users/', function (req, res) {
        db.User.findAll({}).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });
    // Used for looking at a particular user by their ID
    app.get('/api/users/:id', function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbUsers) {
            res.json(dbUsers);
            console.log(dbBudgets)

        });
    });
    // Used for looking at all budgets
    app.get('/api/budgets/', function (req, res) {
        db.Budget.findAll({}).then(function (dbBudgets) {
            res.json(dbBudgets);
            console.log(dbBudgets);
        });
    });

    // Used for looking at all budgets for a particular user
    app.get('/api/budgets/category/user_id/:user_id', function (req, res) {
        db.Budget.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then(function (dbBudgets) {
            res.json(dbBudgets);
        });
    });

    // Used for looking at all budgets in a certain age 
    // (CURRENTLY THIS WORKS FOR A MAXIMUM AGE BUT WE WILL MAKE IT WORK WITH TWO PARAMS, AGE_MIN AND AGE_MAX)
    app.get('/api/budgets/category/age/', function (req, res) {
        res.json({
            message: "You chose an age"
        });
        console.log('YOU MADE IT TO THE AGES ROUTE');
        // db.Budget.findAll({
        //     where: {
        //         age: req.params.age
        //     }
        // }).then(function (dbBudgets) {
        //     res.json(dbBudgets);
        // });
    });

    //     '/api/budgets/category/state/1234'
    // Used for looking at all budgets in a certain state
    app.get('/api/budgets/category/state/', function (req, res) {
        res.json({
            message: "You chose a state"
        });
        console.log('YOU MADE IT TO THE STATES ROUTE');
        // db.Budget.findAll({}).then(function (dbBudgets) {
        //     res.json(dbBudgets);

        // });
    });


    // Used for looking at all budgets in a certain income range
    app.get('/api/budgets/category/income/:income', function (req, res) {
        if (req.params.income) {
            res.json({
                message: "You chose an income"
            });
            console.log('YOU MADE IT TO THE INCOME ROUTE');
        }

        // db.Budget.findAll({}).then(function (dbBudgets) {
        //     res.json(dbBudgets);
        // });
    });





    app.post('api/budgets', function (req, res) {
        db.Budget.create(req.body).then(function (dbBudget) {
            res.json(dbBudget);
        });
    });
    app.post('/api/users', function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};