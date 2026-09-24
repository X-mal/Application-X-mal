import prisma from "../../../core/database/prisma.client.js"

/* Procurando usuarios por username */

async function findByUserNameADM(username) {

    return prisma.userADM.findUnique({
        where: {
            username
        }
    });
}

/**
 * Listagem de usuarios com campos id,username,status
 */
async function listUsersADM() {
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
async function validateUserADM(username, PASS) {
    const user = prisma.userADM.findFirst({
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
async function createUserADM(data) {
    return prisma.userADM.create({
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
    findByUserNameADM,
    listUsersADM,
    validateUserADM,
    createUserADM
}