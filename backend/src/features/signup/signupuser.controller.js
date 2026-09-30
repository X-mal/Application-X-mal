import signUpUser from "./signupuser.service.js";

async function signupController(req, res) {
    try {
        const { ra, username, email, password, curso, instituto, turno} = req.body;
        const user = await signUpUser(ra, username, email, password, curso, instituto, turno);
        res.status(201).json(user);
    } catch (error) {
        res.status(error.statusCode || 502).json({
             mensagem: error.message || 'Erro interno de serviço :'+ error.message 
            }); /* esse || Middleware pega e tras o estatos ou outro ou cria um proprio status  */
    }
}

export default signupController;