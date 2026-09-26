import prisma from "../../../core/database/prisma.client.js"

/* Procurando usuarios por username */

async function findByUserNameADM(username) {

    return prisma.useradm.findFirst({
        where: {
            username
        }
    });
}

/**
 * Listagem de usuarios com campos id,username,status
 */
async function listUsersADM() {
    return prisma.useradm.findMany({
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
async function validateUserADM(username, pass) {
    const user = await prisma.useradm.findFirst({
        where: {
            username,
            pass
        }
    });

    return !!user;
}

/**
 * função de criar usuario
 */
async function createUserADM(data) {
    return prisma.useradm.create({
        data,
        select: {
            id: true,
            username: true,
            pass: true,
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