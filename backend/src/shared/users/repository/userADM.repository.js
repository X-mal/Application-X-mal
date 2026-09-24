import prisma from "../../../core/database/prisma.client"

/* Procurando usuarios por username */

async function findByUserNameAMD(username) {

   return prisma.userAMD.findUnique({
        where: {
            username
        }
    });

}

/**
 * Listagem de usuarios com campos id,username,status
 */
async function listUsersAMD() {
    return prisma.userADM.findMany({
        select: {
            id: true,
            username: true,
            setor: 'faculdade',
            estado: 'ativo'
        }
    });
}

/**
 * validar por usuario e senha
 */
async function validateUserAMD(username, PASS) {
    const user = prisma.userAMD.findFirst({
        where: {
            username,
            PASS
        }
    });

    return !!user;
}

/**
 * função de criar usuario
 */
async function createUserAMD(data) {
    return prisma.userAMD.create({
        data,
        select: {
            id: true,
            username: true,
            setor: 'faculdade',
            estado: 'ativo'
        }
    });
}

export {
    findByUserNameAMD,
    listUsersAMD,
    validateUserAMD,
    createUserAMD
}