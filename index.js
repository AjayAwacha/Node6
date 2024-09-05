const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();
console.log(process.env.MY_CUSTOM_ID);
console.log(process.env.MY_CUSTOM_ID2);


const userRouter = require('./routes/userRoutes');

// default middleware provided by nodejs that are used to parse request body
app.use(express.json());

// default middleware for cookie parser
app.use(cookieParser());

// middleware are used to server static file
app.use('/static', express.static(`${__dirname}/public`));

// mounting a route means creating seprate routing file for each module
app.use('/user', userRouter);

// middleware for unhandled route
app.use('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Please check your route"
    });
});

// global error handling middleware
app.use((err, req, res, next) => {
    console.log('my error ', err);
    res.status(400).json({
        success: false,
        message: "Internal server error"
    })
});

// simple Routing
// app.get('/', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'This is responce from get'
//     });
// });
// app.post('/', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'This is responce from post'
//     });
// })

app.listen(6000, () => {
    console.log('express server listen on port 6000');
});

