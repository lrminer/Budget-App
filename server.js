var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// ---------------MODELS-----------
var db = require("./models");

// ---------------ROUTES-----------
require("./routes/api-routes")(app, path);
require("./routes/html-routes")(app, path);
require("./routes/login-routes")(app, path);

// ---------------------------------
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});