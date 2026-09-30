import { generateToken } from "../../core/security/jwt.service.js";
import signIn from "./signinuser.service.js";

async function signinController(req, res) {
    const { email, password } = req.body;
    if(!email || !password) {
        const error = new Error("Email e senha são obrigatórios");
        error.statusCode = 404;
        return res.status(error.statusCode).json(error.message);
    }
    const { password: _, ...safeUser } = user;

    try {
        const token =generateToken(user);
        return {
            token, user: safeUser
        }
    } catch (issue) {
        const error = new Error("Erro Interno: " + issue.message);
        error.statusCode = 500;
        throw error;
    }
}

export default signinController ;