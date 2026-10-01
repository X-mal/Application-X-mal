import bcrypt from "bcrypt";


async function hashPassword(pass) {
    return bcrypt.hash(pass, 10);

}
async function comparePassword(pass, hashedpassword) {
    return bcrypt.compare(pass, hashedpassword);
}

export {
    hashPassword,
    comparePassword
}