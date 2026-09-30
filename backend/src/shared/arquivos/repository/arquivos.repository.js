import prisma from "../../../core/database/prisma.client.js"
/* Busca o id do arquivo */
async function findByArchiveID(id){
<<<<<<< HEAD
    return prisma.arquivos.findUnique({
=======
    return prisma.arquivos.findFirst({
>>>>>>> 0a93ff30d77717be66f6a55605a5658606a8235e
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