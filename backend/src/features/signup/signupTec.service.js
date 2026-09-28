import bcrypt from 'bcrypt'
import {validateByEmailTec,  validateByUsernameTec, createUserTec} from '../../shared/users/repository/userTec.repository.js'


async function signUpUserTec(ra, username, email, pass, curso, turno) {
    if (!ra || !username || !email || !pass || !curso || !turno) {
        const error = new Error("Campos RA, nome de usuario, email, senha, curso e turno são obrigatorios");
        console.error("ra:", ra, "username:", username, "email:", email, "pass:", pass, "curso:", curso, "turno:", turno);
        error.statusCode = 500;
        throw error;
    }
    if (await validateByUsernameTec(username)) {
        const error = new Error("Nome de usuario ja cadastrado");
        error.statusCode = 409;
        throw error;
    }
    if (await validateByEmailTec(email)) {
        const error = new Error("Email ja registrado");
        error.statusCode = 409;
        throw error;
    }
    try {
        const hashedPass = await bcrypt.hash(pass, 10);
        const user = await createUserTec({
            ra,
            username,
            email,
            pass: hashedPass,
            curso,
            turno

        });
        return user;
    } catch (issue) {
        const error = new Error("Falha ao comunicar com banco de dados: "+ issue.message);
        error.statusCode = 509;
        throw error;
    }
}

export default signUpUserTec