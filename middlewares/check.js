const mongoose = require('mongoose');
//mongoose [passport]
const User = mongoose.model('users');
module.exports = async (req, res, next) => {
    const usr = await User.findOne({username:req.body.username, password:req.body.password});
    if(!usr){
        res.send(false);
    } else {
        next();
    }
};