import User from "../models/User.js"
import { StatusCodes} from "http-status-codes"
import { BadRequestError } from "../errors/index.js"

//express-async-errors package is passing on the errors without try/catch in async function

const register = async (req, res, next) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        throw new BadRequestError("Please fill in all fields.")
    }

    const userAlreadyExists = await User.findOne({email})
    if (userAlreadyExists) {
        throw new BadRequestError(`Message from authController:${email} is already registered.`)
    }

    const user = await User.create({ name, email, password })
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: {
        email: user.email,
        lastName: user.lastName,
        name: user.name,
        location: user.location,
    }, token })
}

const login = async (req, res) => {
    res.send("login user")
}

const updateUser = async (req, res) => {
    res.send("update user")
}
export { register, login, updateUser }