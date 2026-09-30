import { findByEmail } from "../../shared/users/repository/user.repository.js";
import { comparePassword } from "../../core/security/password.service.js";
import { generateToken } from "../../core/security/jwt.service.js";

async function signIn( email, password) {
    const  user =  await findByEmail(email);
    if (!user) {
        const error = new Error("Email não está associado a uma conta");
        error.statusCode = 404;
        throw error;
    }
    if ( ! await comparePassword(password, user.pass)) {
        const error = new Error("Senha incorreta");
        error.statusCode = 409;
        throw error;
    }
    try {
        const token = generateToken(user);
        return {token: token, user: user};
        }catch (issue) {
        const error = new Error("Erro interno" + issue.message);}
    }

    export default  signIn;