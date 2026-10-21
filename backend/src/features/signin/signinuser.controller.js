import signIn from "./signin.service.js";


async function signInController(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        const error = new Error("email e senha são obrigatorios");
        error.statusCode = 400;
        return res.status(error.statusCode).json({ message: error.message });
    }
    try {
        const token = await signIn(email, password);
        if (!token) {
            const error = new Error("Erro ao gerar token");
            error.statusCode = 500;
            throw error;
        }
        return res.status(201).json(token);

    } catch (issue) {
        return res.status(issue.statusCode).json({ message: issue.message });
    }
}

export default signInController