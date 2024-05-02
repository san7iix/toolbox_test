import { StatusCodes } from "http-status-codes";
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
}

export {
    errorHandler
}