const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
//mongoose [passport]
const User = mongoose.model('users');
passport.serializeUser((user, done) => {
    done(null, user.id); // sending userid from db to the cookie
});
passport.deserializeUser((id, done)=>{
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});
//passport middleware
// passport local-strategy
passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({username: username, password: password});
    if(!user) { 
        done(null,false); 
    }

    done(null, user);
}));

