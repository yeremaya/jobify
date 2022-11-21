import CustomAPIErrror from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

class NotfoundError extends CustomAPIErrror {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

export default NotfoundError;