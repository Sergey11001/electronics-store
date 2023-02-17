const jwt = require("jsonwebtoken");
const generateJWT = ({id, email, role}) => {
    return jwt.sign(
        {id, email, role},
        process.env.JWT_KEY,
        {
            expiresIn: '24h',
            algorithm:"HS256"
        })
}

module.exports = generateJWT