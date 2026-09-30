import prisma from "../../../core/database/prisma.cliente.js"

/* Procurando usuarios por username */

async function findByUserName(username) {

    return await prisma.user.findFirst({
        where: {
            username
        }
    });
}
async function findByEmail(email) {
    return await prisma.user.findFirst({
        where: {
            email
        }
    });
}

async function validateByUsername(username) {
    const user = await prisma.user.findFirst({
        where: {
            username
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como true e a primeira inverte para false */
}
async function validateByEmail(email) {
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    });
    return !! user;   /* a segunda esclamação cria o boleano como false e a primeira inverte para true */
}
/**
 * Listagem de usuarios com campos id,username,status
 */
async function listUsers() {
    return await prisma.user.findMany({
        select: {
            id: true,
            ra: true,
            username: true,
            email: true,
            curso: true,
            instituto: 'tecnico',
            situacao: "cursando",
            turno: true
        }
    });
}

/**
 * validar por usuario e senha
 */
async function validateUser(ra, username, email, pass, instituto, turno) {
    const user = await prisma.user.findFirst({
        where: {
            ra,
            username,
            email,
            pass,
            instituto,
            turno
        }
    });

    return !!user;
}

/**
 * função de criar usuario
 */
async function createUser(data) {
    return prisma.user.create({
        data,
        select: {
            id: true,
            username: true,
            email: true,
            pass: true,
            curso: true,
            instituto: true,
            turno: true
        }
    });
}

export {
    findByEmail,
    validateByUsername,
    validateByEmail,
    findByUserName,
    listUsers,
    validateUser,
    createUser
}