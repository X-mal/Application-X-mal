import { hashPassword } from '../../core/security/password.service.js'
import {validateByEmail,  validateByUsername, createUser} from '../../shared/users/repository/user.repository.js'


async function signUpUser(ra, username, email, pass, curso,instituto, turno) {
    if (!ra || !username || !email || !pass || !curso || !instituto || !turno) {
        const error = new Error("Campos RA, nome de usuario, email, senha, instituto, curso e turno são obrigatorios");
        console.error("ra:", ra, "username:", username, "email:", email, "pass:", pass, "curso:", curso, "instituto:", instituto, "turno:", turno);
        error.statusCode = 500;
        throw error;
    }
    if (await validateByUsername(username)) {
        const error = new Error("Nome de usuario ja cadastrado");
        error.statusCode = 409;
        throw error;
    }
    if (await validateByEmail(email)) {
        const error = new Error("Email ja registrado");
        error.statusCode = 409;
        throw error;
    }
    try {
        const hashedPass = await hashPassword(pass);
        const user = await createUser({
            ra,
            username,
            email,
            pass: hashedPass,
            curso,
            instituto,
            turno

        });
        return user;
    } catch (issue) {
        const error = new Error("Falha ao comunicar com banco de dados: "+ issue.message);
        error.statusCode = 509;
        throw error;
    }
}

export default signUpUser