const AppError = require('../utils/AppError');

function verifyUserAuthorization(ruleToVerify) {
    return (req, res, next) => {
        const { rule } = req.user;

        if(rule !== ruleToVerify) {
            throw new AppError('Unauthorized', 401);
        }

        return next();
    }
}

module.exports = verifyUserAuthorization;