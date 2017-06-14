const User = require('./userModel');


const userController = {};

userController.getAllUsers = (next) => {
  User.find({}, next);
};

userController.createUser = (req, res, next) => {
    console.log('req.body',req.body)
    User.create(req.body, (err, user) => {
        if (err){
            res.send('error');
        }
        // res.sendFile(__dirname, './../client/Userpage');
        res.status(200).end();
    });
};



module.exports = userController;