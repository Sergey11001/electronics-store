const ApiError = require('../error/ApiError')
const {User, Basket} = require("../models/models");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = require('../helpers/generateJWT')

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Неправильный логин или пароль'))
        }
        const candidate = await User.findOne({
            where: {email}
        })
        if (candidate) {
            return next(ApiError.badRequest('Email занят'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({
            email,
            role,
            password: hashPassword
        })
        const basket = await Basket.create({
            userId: user.id
        })
        const token = generateJWT({id:user.id, email:user.email, role:user.role})
        return res.json({
            token
        })
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({
            where:{email}
        })
        if(!user){
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Password is not correct'))
        }
        const token = generateJWT(user)
        return res.json({
            token
        })
    }

    auth(req, res) {
        const token = generateJWT({id:req.user.id, email: req.user.email, role: req.user.role})
        res.json({token})
    }

}

module.exports = new UserController()