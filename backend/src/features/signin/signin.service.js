import bcryp from 'bcrypt.js';  /* é uma criptografia que é impossivel reverter */

import {validateByUsernameTec, validateByUserEmailTec, createUserTec} from '../../users/repository/userTec.repository.js';


function signUpUserTec(username, email, password) {
    if(!username || !email || !password) {
        const error = new Error("Campos nome de usuário, email e senha são obrigatorios");
        error.statusCode = 500;    /*    500 pode ser um erro na api */
        throw error;
    };

    if(validadeByusernameTec(username)) {
        const error = new Error("Nome de usuário já cadastrado");
        error.statusCode = 409;
        throw error;
    };
    if(validateByEmailTec(email)) {
        const error = new Error("Email já cadastrado");
        error.statusCode = 409;
        throw error;
    };
     try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser({
            username,
            email,
            password: hashedPassword
        });
        return user;
    } catch (issue) {
        const error = new Error("Falha ao comunicar com o banco de dados");
    error.statusCode = 509;
    throw error; 
   }
};

export default signUpUserTec;