import { verifyToken } from "./jwt.service";

function authMiddleWare(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader || authHeader.startsWith("Bearer ")) {
        res.status(401).json({message: "Requisição sem token"})
    }
    const token = authHeader.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Requisição sem token" });
    }
    
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();

    } catch (issue) {
        res.status(401).json({ message: "token invalido ou expirado"})
    }
}

export default authMiddleWare