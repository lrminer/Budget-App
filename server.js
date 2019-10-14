require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 4000;
const session = express("express-session");
const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const db = require('./models');

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

// console.log(process.env.SESSIONKEY)

// const sessionMW = session({
//   secret: process.env.SESSIONKEY,
//   resave: false,
//   saveUninitialized: true
// });

// app.use(sessionMW);
app.use(passport.initialize());
const passportSession = passport.session();
app.use(passportSession);

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, username, password, done) {
      db.User.findOne({
        username: username
      }).then(function(user) {
        if (!user) {
          console.log("\n\n\nUser cannot be found... Login failed.");
        } else if (user) {
          //hash
          bcrypt.compare(password, user.password, function(err, res) {
            if (res) {
              console.log(
                "\n\nSuccessful login. Access granted to",
                user.username,
                "\n\n"
              );
              req.session.userId = user._id;
              return done(null, user);
            } else {
              console.log("\n\nBad password. Access denied. Login failed.");
            }
          });
        }
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id)
    .then(function(user) {
      done(null, user);
    })
    .catch(function(err) {
      done(err);
    });
});

// -------------STATIC DIR---------
app.use(express.static("public"));


// ---------------ROUTES-----------
require("./routes/api-routes")(app, path);
require("./routes/html-routes")(app, path);
require("./routes/login-routes")(app, path, passport);

// ---------------------------------
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
