import prisma from "../../../core/database/prisma.client.js"

/* Procurando usuarios por username */

async function findByUserNameFac(username) {

    return prisma.userfac.findFirst({
        where: {
            username
        }
    });
}
async function findByEmailFac(email) {
    return prisma.userfac.findFirst({
        where: {
            email
        }
    });
};

async function validateByUsernameFac(username) {
    const user = await prisma.userfac.findFirst({
        where: {
            username
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como true e a primeira inverte para false */
};
async function validateByUserEmailFac(email) {
    const user = await prisma.userfac.findFirst({
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
    return prisma.userfac.findMany({
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
async function validateUserFac(username, pass) {
    const user = await prisma.userfac.findFirst({
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
async function createUserFac(data) {
    return prisma.userfac.create({
        data,
        select: {
            id: true,
            username: true,
            pass: true,
            turno: true
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