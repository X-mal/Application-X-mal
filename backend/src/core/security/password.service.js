import bcrypt from "bcrypt";


async function hashPassword(password) {
    return bcrypt.hash(password, 10);

}
async function comparePassword(password, hashedpassword) {
    return bcrypt.compare(password, hashedpassword);
}

export {
    hashPassword,
    comparePassword
}