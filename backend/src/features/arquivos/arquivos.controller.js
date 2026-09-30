// src/controllers/arquivoController.js
import { createArquivoService, getArquivoByIdService } from "../services/arquivoService.js";

export async function create(req, res, next) {
  try {
    // Passa o corpo da requisição (req.body) para o service
    const newArquivo = await createArquivoService(req.body);
    return res.status(201).json(newArquivo);
  } catch (error) {
    next(error); // Encaminha o erro com o statusCode para o middleware de erro
  }
}

export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const arquivo = await getArquivoByIdService(id);
    return res.status(200).json(arquivo);
  } catch (error) {
    next(error);
  }
}