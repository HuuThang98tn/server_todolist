const jwt = require("jsonwebtoken");

class VerifyToken {
    mVerifyToken(req, res, next) {
        try {
            const token = req.headers.token;
            if (token) {
                const accessToken = token.split(" ")[1];
                jwt.verify(accessToken, "jsonwebtoken", (err, user) => {
                    if (err) {
                        res.status(403).json({ err, message: "Error" });
                    } else {
                        req.user = user;
                        next();
                    }
                });
            } else {
                res.status(401).json({ message: "Token not found" });
            }
        } catch (e) {
        }
    }
}
module.exports = new VerifyToken();