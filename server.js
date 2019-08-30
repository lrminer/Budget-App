var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ---------------ROUTES-----------
// require("./routes/index.js")(app, path);
// require("./routes/users.js")(app, path);
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


// ---------------MODELS-----------
// var db = require("./models");

// ---------------------------------
// db.sequelize.sync({ force: true }).then(function () {
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// });