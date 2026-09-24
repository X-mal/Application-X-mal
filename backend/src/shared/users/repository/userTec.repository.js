import prisma from "../../../core/database/prisma.client.js"

/* Procurando usuarios por username */

async function findByUserNameTec(username) {

    return prisma.userTec.findUnique({
        where: {
            username
        }
    });
}
async function findByEmailTec(email) {
    return prisma.userTec.findUnique({
        where: {
            email
        }
    });
    return ! ! user;   /* a segunda esclamação cria o boleano como true e a primeira inverte para false */
}

async function validateByUsernameTec(username) {
    const user = prisma.userTec.findUnique({
        where: {
            username
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como true e a primeira inverte para false */
}
async function validateByUserEmailTec(email) {
    const user = prisma.userTec.findUnique({
        where: {
            email
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como false e a primeira inverte para true */
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
    findByEmailTec,
    validateByUsernameTec,
    validateByUserEmailTec,
    findByUserNameTec,
    listUsersTec,
    validateUserTec,
    createUserTec
}