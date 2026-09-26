import prisma from "../../../core/database/prisma.client.js"

/* Procurando usuarios por username */

async function findByUserNameTec(username) {

    return prisma.usertec.findFirst({
        where: {
            username
        }
    });
}
async function findByEmailTec(email) {
    return prisma.usertec.findFirst({
        where: {
            email
        }
    });
}

async function validateByUsernameTec(username) {
    const user = await prisma.usertec.findFirst({
        where: {
            username
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como true e a primeira inverte para false */
}
async function validateByEmailTec(email) {
    const user = await prisma.usertec.findFirst({
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
    return prisma.usertec.findMany({
        select: {
            id: true,
            ra: true,
            username: true,
            email: true,
            curso: true,
            situacao: "cursando",
            turno: true
        }
    });
}

/**
 * validar por usuario e senha
 */
async function validateUserTec(ra, username, email, pass, turno) {
    const user = await prisma.usertec.findFirst({
        where: {
            ra,
            username,
            email,
            pass,
            turno
        }
    });

    return !!user;
}

/**
 * função de criar usuario
 */
async function createUserTec(data) {
    return prisma.usertec.create({
        data,
        select: {
            id: true,
            username: true,
            email: true,
            pass: true,
            curso: true,
            turno: true
        }
    });
}

export {
    findByEmailTec,
    validateByUsernameTec,
    validateByEmailTec,
    findByUserNameTec,
    listUsersTec,
    validateUserTec,
    createUserTec
}