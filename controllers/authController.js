const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}


exports.signup = async (req, res, next) => {

    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
        })

        const token = signToken(newUser._id)

        res.status(201).json({
            status: 'success ✅',
            token,
            data: {
                user: newUser
            }

        })

    } catch (error) {
        res.status(400).json({
            status: 'fail ❌',
            message: error
        })
    }

}

exports.login = async (req, res, next) => {

    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({
            status: 'error ❌',
            message: 'please provide eamil and password'
        })
        return
    }

    const user = await User.findOne({ email: email }).select('+password')
    const correct = await user.correctPassword(password, user.password)

    if (!user || !correct) {

        return next(new AppError('Inccorect email or password', 401))

    }

    const token = signToken(user._id)

    res.status(200).json({

        status: 'success ✅',
        token: token

    })

}
