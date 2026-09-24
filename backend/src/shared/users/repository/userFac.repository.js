import prisma from "../../../core/database/prisma.client.js"

/* Procurando usuarios por username */
Fac
async function findByUserNameFac(username) {

    return prisma.userFac.findUnique({
        where: {
            username
        }
    });
}
async function findByEmailFac(email) {
    return prisma.userFac.findUnique({
        where: {
            email
        }
    });
};

async function validateByUsernameFac(username) {
    const user = await prisma.userFac.findUnique({
        where: {
            username
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como true e a primeira inverte para false */
};
async function validateByUserEmailFac(email) {
    const user = await prisma.userFac.findUnique({
        where: {
            email
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como false e a primeira inverte para true */
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
    const user = await prisma.userFac.findFirst({
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
    findByEmailFac,
    validateByUsernameFac,
    validateByUserEmailFac,
    findByUserNameFac,
    listUsersFac,
    validateUserFac,
    createUserFac
}