const express = require('express');
const userRouter = express.Router();

const { userContract } = require('../contracts/user');

// parameter middleware
userRouter.param('userId', (req, res, next, userId) => {
    // conside if there is error here
    console.log('Parameter middleware is trigger userId ', userId);
    next();
})

userRouter.get('/getAll', (req, res) => {
    // throw error to error handling middleware
    const isErrorOccure = true;
    if (isErrorOccure) {
        next(new Error('My Custom Internal server Error'));
    }
    res.status(200).json({
        success: true,
        message: 'This is responce from get'
    });
});

userRouter.post('/create', userContract, (req, res) => {
    const userDetails = req.body;
    console.log('userDetails ', userDetails);
    res.status(200).json({
        success: true,
        message: 'This is responce from Post'
    });
});

userRouter.get('/getUserById/:userId', (req, res) => {
    console.log('route with parameter', req.params);
    res.status(200).json({
        success: true,
        message: 'This is responce from Post'
    });
})
module.exports = userRouter;