import signUpUserTec from "./signupTec.service.js";

async function signupControllerTec(req, res) {
    try {
        const { ra, username, email, password, curso, turno} = req.body;
        const user = await signUpUserTec(ra, username, email, password, curso, turno);
        res.status(201).json(user);
    } catch (error) {
        res.status(error.statusCode || 502).json({
             mensagem: error.message || 'Erro interno de serviço :'+ error.message 
            }); /* esse || Middleware pega e tras o estatos ou outro ou cria um proprio status  */
    }
}

export default signupControllerTec;