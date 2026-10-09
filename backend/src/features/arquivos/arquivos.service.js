// src/services/arquivoService.js

// 1. Importa as funções do teu arquivo Repository
import { createArchive, findByArchiveID } from "../repositories/arquivoRepository.js";

// Função para procurar um arquivo por ID
export async function getArquivoByIdService(id) {
  // Regra de negócio: Valida se o ID foi informado
  if (!id) {
    const error = new Error("O ID do arquivo é obrigatório.");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  // Chama o repositório para procurar no banco de dados
  const arquivo = await findByArchiveID(id);

  // Regra de negócio: Se o arquivo não existir no banco, lança erro 404
  if (!arquivo) {
    const error = new Error("Arquivo não encontrado.");
    error.statusCode = 404; // Not Found
    throw error;
  }

  return arquivo;
}

// Função para criar um novo arquivo
export async function createArquivoService(data) {
  // Regra de negócio: Validações de campos obrigatórios
  if (!data || !data.descricao) {
    const error = new Error("A descrição do arquivo é obrigatória.");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  if (!data.arquivo) {
    const error = new Error("O ficheiro/arquivo é obrigatório.");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  // Chama o repositório para criar o registo no banco
  const newArquivo = await createArchive(data);

  return newArquivo;
}