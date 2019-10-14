const path = require('path');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    });
    app.get('/category', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/category.html'))
    });
    app.get('/compare', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/compare.html'))
    });
    app.get('/home', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    });
    app.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/login.html'))
    });
    app.get('/newBudget', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/newBudget.html'))
    });
    app.get('/newUserInfo', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/newUserInfo.html'))
    });
    // app.get('/', function (req, res) {
    //     res.sendFile(path.join(__dirname, '../public/index.html'))
    // });
}