/////////// SERVER.JS ---- THIS FILE IS THE STARTING POINT FOR OUR REPO ///////////////

// Dependencies
const express = require('express');

// SETS UP EXPRESS APP
const app = express();
const PORT = process.env.PORT || 8080;

// REQUIRE MODELS FOR SYNCING
const db = require('./models');

// MIDDLEWARE
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// STATIC DIR
app.use(express.static('public'));

// ROUTES
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

// SYNCING sequelize MODELS AND THEN STARTS LISTENING
db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT + "\nhttp://localhost:" + PORT);
    })
})