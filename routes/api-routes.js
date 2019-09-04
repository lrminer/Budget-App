const db = require('../models');

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
            console.log(dbBudgets)

        });
    });
    // To query by whatever has been selected
    // /api/budgets?location=GA&age=27
    // app.get("/api/budgets/" + Location + '=' + LocationValue)
    app.get("/api/budgets/", function (req, res) {
        console.log(req.query);
        db.Budget.findAll({
            include: [{
                model: db.User,
                where: req.query
            }]
        }).then(budget => {
            console.log(JSON.stringify(budget))
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
    //         res.json(dbBudgets);
    //         console.log(dbBudgets)
    //     });
    // });

    // Used for looking at all budgets for a particular user
    app.get('/api/budgets/category/user_id=:user_id', function (req, res) {
        db.Budget.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then(function (dbBudgets) {
            res.json(dbBudgets);
        });
    });

    // Used for looking at all budgets in a certain age
    app.get('api/budgets/category/age=:age', function (req, res) {
        db.Budget.findAll({}).then(function (dbBudgets) {
            res.json(dbBudgets);
        });
    });

    app.post('api/budgets', function (req, res) {
        db.Budget.create(req.body).then(function (dbBudget) {
            res.json(dbBudget);
        });
    });
    app.post('api/users', function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};