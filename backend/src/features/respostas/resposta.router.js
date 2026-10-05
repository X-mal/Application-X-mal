import { Router } from "express";
import { create, getById } from "../../controllers/respostaController.js"; 

const respostaRouter = Router();

// Rota para criar uma resposta (POST)
respostaRouter.post("/respostas", create);

// Rota para buscar uma resposta específica por ID (GET)
respostaRouter.get("/respostas/:id", getById);

export default respostaRouter;