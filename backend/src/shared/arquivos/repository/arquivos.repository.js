import prisma from "../../../core/database/prisma.client.js"
/* Busca o id do arquivo */
async function findByArchiveID(id){
    return prisma.arquivos.findFirst({
            where: {
                id
            }
        });
}   
/* Criar o arquivo */
async function createArchive(data){
    return prisma.arquivos.create({
        data,
        select: {
            id: true,
            descricao: true,
            estado: 'recebido',
            idtec: true,
            idfac: true,
            arquivo: true
        }
        });
}   

export {
    createArchive,
    findByArchiveID
}