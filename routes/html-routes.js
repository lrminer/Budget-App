const path = require('path');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/compare.html'))
    });
    app.get('/category', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/category.html'))
    });
    app.get('/compare', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/compare.html'))
    });
    app.get('/home', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });
    app.get('/login', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'))
    });
    app.get('/newBudget', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/newBudget.html'))
    });
    app.get('/newUserInfo', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/newUserInfo.html'))
    });
    // app.get('/', function (req, res) {
    //     res.sendFile(path.join(__dirname, '../public/index.html'))
    // });
}