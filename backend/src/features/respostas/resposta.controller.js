// src/controllers/respostaController.js
import { createRespostaService, getRespostaService } from "../services/respostaService.js";

export async function create(req, res, next) {
  try {
    const newResposta = await createRespostaService(req.body);
    return res.status(201).json(newResposta);
  } catch (error) {
    next(error); // Encaminha o erro com o statusCode para o middleware de erro
  }
}

export async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const resposta = await getRespostaService(id);
    return res.status(200).json(resposta);
  } catch (error) {
    next(error);
  }
}