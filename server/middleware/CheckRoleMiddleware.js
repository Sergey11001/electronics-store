const jwt = require('jsonwebtoken')
module.exports = function (role){
    return function (req, res, next){
        if(req.method==="OPTIONS"){
            next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(401).json({
                    message:'User not auth'
                })
            }
            const decoder =  jwt.verify(token, process.env.JWT_KEY)
            if(decoder.role!==role){
                return res.status(403).json({
                    message:'No access'
                })
            }
            req.user = decoder
            next()

        }
        catch (e){
            return res.status(401).json({
                message:'User not auth'
            })
        }
    }

}