const passport = require('passport');
const check = require('../middlewares/check');

const mongoose = require('mongoose');
//mongoose [passport]
const User = mongoose.model('users');

module.exports = (app) => {
    // app.get(
    //     '/auth/google/callback',
    //     passport.authenticate('google'),
    //     (req, res) => {
    //         res.redirect('/dashboard');
    //     }

    // );
    
    app.post('/api/signup', async (req, res)=>{
        const formData = req.body;
        try{
            const user =  await User.findOne(formData).exec();
            if(user){
                res.send({
                    message: 'user already exists'
                });
            }else{
                await new User(formData).save();
                res.send({
                    message: 'user added'
                });
            }
        } catch(err){
            console.log(err);
        }
    });
    
    app.post('/api/login',
        check,
        passport.authenticate('local', {
            failureRedirect: '/api/login'
        }),
        (req, res) => {
            res.redirect('/api/current_user');
        });
    // app.get(
    //     '/auth/google',
    //     passport.authenticate('google', {
    //         scope: ['profile', 'email']
    //     })
    // );
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
}