
const mAuthService = require("../service/AuthService")

class AuthController {
    async mLogIn(req, res, next) {
        const { email, password } = req.body
        try {
            const user = await mAuthService.mLoginService({
                email,
                password,
            })
            // console.log(user);

            const result = [user]

            res.json({
                code: 200,
                message: "Success",
                result
            })

        } catch (error) {
            console.log(error);
            res.json({
                code: 400,
                message: "Error while authenticating",
                error
            })
        }
    }

    async mRegister(req, res, next) {
        const { userName, email, password } = req.body
        try {
            const register = await mAuthService.mRegisterService({
                userName,
                email,
                password
            })
            const result = [register]
            res.json({
                code: 200,
                message: "Success",
                result
            })

        } catch (error) {
            res.json({
                code: 400,
                message: "Error while authenticating",
                error
            })
        }
    }
}

module.exports = new AuthController();