import { StatusCodes} from "http-status-codes"

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log("\u001b[1;33mJogi says the following went wrong:\u001B[0m " + `${ err }`)
    //console.log(JSON.stringify(err))
    //console.log(err)
    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, please try again later."
    }

    if (err.name === 'ValidationError') {
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = Object.values(err.errors).map((item) => item.message).join(". ")
    }

    if (err.code && err.code === 11000) {
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = `Message from error-handler:${err.keyValue.email} is already registered.`
    }    

    res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

export default errorHandlerMiddleware