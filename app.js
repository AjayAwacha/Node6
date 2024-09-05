const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
require('dotenv').config();
console.log(process.env.MY_CUSTOM_ID);
console.log(process.env.MY_CUSTOM_ID2);
console.log(process.env.MY_CUSTOM_ID3);

const userRouter = require('./routes/userRoutes');
const { unhandledRouteController } = require('./common');

app.use(express.json());  // parse request body
app.use(cookieParser());  // parse cookie
app.use('/static', express.static(`${__dirname}/public`)); // serve static file

//Mounting Routes
app.use('/user', userRouter);

// middleware for unhandled route
app.use('*', unhandledRouteController);

// global error handling middleware
app.use((err, req, res, next) => {
    console.log('my error ', err);
    res.status(400).json({
        success: false,
        message: "Internal server error"
    })
});

module.exports = app;
