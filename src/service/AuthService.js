const mUserModel = require("../models/AuthModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

class AuthService {

    async mLoginService({ email, password }) {

        const { _id, userName, emails, passwords } = await mUserModel.findByCredentials(email, password);
        let accesstoken = jwt.sign({ id: _id }, "jsonwebtoken", { expiresIn: "360d" });
        // const jsonWebToken = [token]
        return {
            _id,
            userName,
            emails,
            passwords,
            accesstoken
        }
    }
    async mRegisterService({ userName, email, password }) {

        const passwordEncryption = await bcrypt.hash(password, 10)

        const newUserAccount = new mUserModel({
            userName: userName,
            email: email,
            password: passwordEncryption
        })

        const { _id } = await newUserAccount.save();

        return {
            _id,
            userName,
            email,
            passwordEncryption
        }
    }
}

module.exports = new AuthService()