import prisma from "../../../core/database/prisma.client"

/* Procurando usuarios por username */

async function findByUserNameTec(username) {

    prisma.userTec.findUnique({
        where: {
            username
        }
    });
}

/**
 * Listagem de usuarios com campos id,username,status
 */
async function listUsersTec() {
    return prisma.userTec.findMany({
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
async function validateUserTec(username, password) {
    const user = prisma.userTec.findFirst({
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
async function createUserTec(data) {
    return prisma.userTec.create({
        data,
        select: {
            id: true,
            username: true,
            situacao: "cursando"
        }
    });
}

export {
    findByUserNameTec,
    listUsersTec,
    validateUserTec,
    createUserTec
}