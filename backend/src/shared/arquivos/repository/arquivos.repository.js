import prisma from "../../../core/database/prisma.client.js"
/* Busca o id do arquivo */
async function findByArchiveID(id){
<<<<<<< HEAD
    return prisma.arquivos.findFirst({
=======
<<<<<<< HEAD
    return prisma.arquivos.findUnique({
=======
    return prisma.arquivos.findFirst({
>>>>>>> 0a93ff30d77717be66f6a55605a5658606a8235e
>>>>>>> 7b9c781aa48812ee823f05e397b5e6e87d9eb920
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
            estado: true,
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