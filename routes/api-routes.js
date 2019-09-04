const db = require('../models');

const averageData = require('../public/js/averagingData');

module.exports = function (app) {
    // Used for looking at all users



    app.get('/api/users', function (req, res) {
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

        });
    });

    // To query by whatever has been selected
    // /api/budgets?location=GA&age=27

    app.get("/api/budgets", function (req, res) {

        console.log(req.query);
        db.Budget.findAll({
            include: [{
                model: db.User,
                where: req.query
            }]
        }).then(budget => {
            // console.log(JSON.stringify(budget))

            res.json((averageData(budget)));
            //   where: whereObj
            // }).then(function(results) {
            //   res.json(results);
            // });
            // res.end();
        });
    });
    // Used for looking at all budgets

    // app.get('/api/budgets/', function (req, res) {

    //     db.Budget.findAll({}).then(function (dbBudgets) {

    //         console.log(dbBudgets);

    //         console.log(averageData(dbBudgets));

    //         res.json(averageData(dbBudgets));
    //     });
    // });

    // Used for looking at all budgets for a particular user
    app.get('/api/budgets/category/user_id=:user_id', function (req, res) {
        db.Budget.findAll({
            where: {
                id: req.params.user_id // needs to be changed to userid after reseed 
            }
        }).then(function (dbBudgets) {
            res.json(dbBudgets);
        });
    });

    app.get('/api/budgets/location=:location', function (req, res) {
        db.Budget.findAll({
            include: {
                model: db.User,
                where: {
                    Location: req.params.location // needs to be changed to userid after reseed 
                }
            }

        }).then(function (dbBudgets) {
            res.json(dbBudgets);
        });
    });

    //     db.Budget.findAll({
    //         include: [{
    //             model: db.User,
    //             where: req.query
    //         }]

    // Used for looking at all budgets in a certain age
    app.get('/api/budgets/age=:age', function (req, res) {
        console.log(req.params);
        db.Budget.findAll({
            include: [{
                model: db.User,
                where: {
                    Age: req.params.age // needs to be changed to userid after reseed 
                }
            }]
        }).then(function (dbBudgets) {
            res.json(dbBudgets);
        });
    });

    app.post('/api/budgets', function (req, res) {
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