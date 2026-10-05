// src/services/respostaService.js

// 1. Importa as funções exportadas pelo seu Repository
import { createResposta, respostaArchive } from "../repositories/respostaRepository.js";

// Função para buscar/obter a resposta por ID
export async function getRespostaService(id) {
  if (!id) {
    const error = new Error("O ID da resposta é obrigatório.");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  const resposta = await respostaArchive(id);

  // Regra de negócio: Se não encontrar o registo no banco, lança erro
  if (!resposta) {
    const error = new Error("Resposta não encontrada.");
    error.statusCode = 404; // Not Found
    throw error;
  }

  return resposta;
}

// Função para criar uma nova resposta
export async function createRespostaService(data) {
  // Regra de negócio: Valida se o texto da resposta foi fornecido
  if (!data || !data.resposta) {
    const error = new Error("O campo 'resposta' é obrigatório.");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  // Chama o repositório para salvar no banco de dados
  const newResposta = await createResposta(data);

  return newResposta;
}