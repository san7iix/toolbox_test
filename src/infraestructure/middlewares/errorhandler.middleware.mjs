import { StatusCodes } from 'http-status-codes'
const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error interno del servidor' })
}

export {
  errorHandler
}
