const app = require('./app');

const port = 6000;
app.listen(port, () => {
    console.log(`server listen on port ${port}`);
});
