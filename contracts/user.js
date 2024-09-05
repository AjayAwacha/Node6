
exports.userContract = (req, res, next) => {
    const userBody = req.body;
    console.log('Got call in user contract', userBody);
    if (!userBody.userName || !userBody.passowrd) {
        res.status(400).json({
            success: false,
            message: 'data is not valie'
        });
    }
    next();
}
