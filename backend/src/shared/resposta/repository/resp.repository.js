import prisma from "../../../core/database/prisma.client.js"

async function respostaArchive(id){
    return prisma.resp.findFirst({
        where:{
            id: true,
            resposta: true,
            arquivo: true,
            adm: true,
        }
    });
}   

async function createResposta(data){
    return prisma.resp.create({
        data,
        select: {
            id: true,
            resposta: true,
            arquivo: true,
            adm: true,
        }
    });
}

export{
    createResposta,
    respostaArchive
}