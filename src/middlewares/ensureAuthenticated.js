import { verify } from "jsonwebtoken";
import authConfig from '../configs/auth';
import AppError from "../utils/AppError";

function ensureAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        throw new AppError('Token JWT não informado.', 401);
    }

    const [, token] = authHeader.split(' ');

    try{

        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        req.user = {
            id: Number(user_id)
        }

        return next();

    } catch {
        throw new AppError('Token JWT inválido', 401);
    }

}

module.exports = ensureAuthenticated