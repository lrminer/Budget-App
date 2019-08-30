//// NOT SURE WHERE TO PUT THIS FILE. WILL PUT IT SOMEWHERE APPROPRIATE BEFORE SUBMISSION
// MIGHT PUT ON SERVER FOR TIME BEING UNTIL I KNOW HOW TO PROPERLY EXPORT IT
// Might need to go on api-routes? ask TA
// TO WORK WITH THE LOGIN PAGE WHENEVER WE WANT TO REUSE A USER..

// DEPENDENCIES
const passport = require('passport');

// deconstructor
const {
    sequelize,
    User
} = require('./models');

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function (username, password, doneCB) {
        User.findOne({
            where: {
                username: username
            }
        }).then(function(user){
            if (user) {
                const isValid = user.validatePassword(password);
                
                if (isValid) return doneCB(null, user);

                return doneCB(null, false);
            } else {
                return doneCB (null, false);
            }
        });
    }
));