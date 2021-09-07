import { AnyRecord } from "dns";
require("dotenv").config({ path: __dirname + "/../.env" });


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const { JWT_EXPIRATION_TIME, JWT_SECRET } = require('../../config');

const hashPassword = async (password: any) => {   
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}

const comparePasswords = async (password: any, dbPassword: any) => {
    return await bcrypt.compare(password, dbPassword);
}

const createToken = (email: any) => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION_TIME
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