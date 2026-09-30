import prisma from "../../../core/database/prisma.client.js"

/* Procurando usuarios por username */

async function findByUserNameADM(username) {

<<<<<<< HEAD
   return prisma.userAMD.findUnique({
=======
    return prisma.useradm.findFirst({
>>>>>>> 0a93ff30d77717be66f6a55605a5658606a8235e
        where: {
            username
        }
    });

}

/**
 * Listagem de usuarios com campos id,username,status
 */
<<<<<<< HEAD
async function listUsersAMD() {
    return prisma.userADM.findMany({
=======
async function listUsersADM() {
    return prisma.useradm.findMany({
>>>>>>> 0a93ff30d77717be66f6a55605a5658606a8235e
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