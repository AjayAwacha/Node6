
exports.unhandledRouteController = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Invalid Route"
    });
};
