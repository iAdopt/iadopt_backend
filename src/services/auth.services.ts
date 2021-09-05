import { AnyRecord } from "dns";

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_EXPIRATION_TIME, JWT_SECRET } = require('../../config');

const hashPassword = async (password: any) => {
    console.log(`hashPassword:::${18087}`);
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}

const comparePasswords = async (password: any, dbPassword: any) => {
    return await bcrypt.compare(password, dbPassword);
}

const createToken = (email: any) => {
    const token = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION_TIME
    });
    return{
        accesToken:token,
        tokenType:"Bearer",
        expiresIn:'2h',
    }
};

module.exports = {
    hashPassword,
    comparePasswords,
    createToken,
};