const { verify } = require("jsonwebtoken");
const authConfig = require('../configs/auth');
const AppError = require("../utils/AppError");

function ensureAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        throw new AppError('Token JWT não informado.', 401);
    }

    const [, token] = authHeader.split(' ');

    try{

        const { rule, sub: user_id } = verify(token, authConfig.jwt.secret);

        req.user = {
            id: Number(user_id),
            rule,
        }

        return next();

    } catch {
        throw new AppError('Token JWT inválido', 401);
    }

}

module.exports = ensureAuthenticated