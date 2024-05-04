import { EXTERNAL_API_ROUTES, EXTERNAL_API_URL } from '../helpers/CONSTS.mjs'
import { GET } from '../helpers/HTTP_METHODS.mjs'

const getFileNamesFromExternalAPIService = async () => {
  const response = await GET(EXTERNAL_API_URL + EXTERNAL_API_ROUTES.GET_FILES_NAMES, true)

  if ('files' in response) return response.files

  return response
}

const getFileDataFromExternalAPIService = async (fileName) => {

  if (!fileName) throw new Error('El parametro fileName es requerido')

  return await GET(EXTERNAL_API_URL + EXTERNAL_API_ROUTES.GET_FILE_DATA + '/' + fileName, true)
}

export {
  getFileNamesFromExternalAPIService,
  getFileDataFromExternalAPIService
}
