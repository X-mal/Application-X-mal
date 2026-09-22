import prisma from "../../../core/database/prisma.client"

/* Procurando usuarios por username */

async function findByUserNameFac(username) {

    prisma.userFac.findUnique({
        where: {
            username
        }
    });
}

/**
 * Listagem de usuarios com campos id,username,status
 */
async function listUsersFac() {
    return prisma.userFac.findMany({
        select: {
            id: true,
            username: true,
            situacao: "cursando"
        }
    });
}

/**
 * validar por usuario e senha
 */
async function validateUserFac(username, password) {
    const user = prisma.userFac.findFirst({
        where: {
            username,
            password
        }
    });

    return !!user;
}

/**
 * função de criar usuario
 */
async function createUserFac(data) {
    return prisma.userFac.create({
        data,
        select: {
            id: true,
            username: true,
            situacao: "cursando"
        }
    });
}

export {
    findByUserNameFac,
    listUsersFac,
    validateUserFac,
    createUserFac
}