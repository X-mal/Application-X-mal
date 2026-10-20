import prisma from "../../../core/database/prisma.cliente.js"
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
            estado: true,
            iduser: true,
            resposta: true
        }
        });
}   

export {
    createArchive,
    findByArchiveID
}