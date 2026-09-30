import { Router } from "express";
import { create, getById } from "../controllers/arquivoController.js"; 
// ^ Ajuste o caminho acima se a sua pasta de controllers for diferente

const arquivoRouter = Router();

// Rota para criar um arquivo (POST)
arquivoRouter.post("/arquivos", create);

// Rota para buscar um arquivo por ID (GET)
// O ':id' é uma variável na URL
arquivoRouter.get("/arquivos/:id", getById);

export default arquivoRouter;
