import signUpUserTec from "./signupTec.service.js";

async function signupControllerTec(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = await signUpUserTec(username, email, password);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(502).json({ mensagem: error.message });
    }

}

export default signupControllerTec;