import { parseFileData } from '../../../infraestructure/helpers/FUNCTIONS.mjs'
import { getFileDataFromExternalAPIService, getFileNamesFromExternalAPIService } from '../../../infraestructure/service/FileServices.mjs'

export const GetFilesWithData = async (_, res) => {
  try {
    const dataResponse = []

    const response = await getFileNamesFromExternalAPIService()

    const fileDataPromises = response.map(async (fileName) => {
      try {
        const fileData = await getFileDataFromExternalAPIService(fileName)
        return fileData
      } catch (error) {
        console.warn('Omitiendo archivo: ' + fileName + ' debido a un error')
        // console.error(error)
        return null
      }
    })

    const fileDataResults = await Promise.all(fileDataPromises)

    console.time('Parseo de archivos')

    for (let i = 0; i < fileDataResults.length; i++) {
      try {
        const fileData = fileDataResults[i]
        parseFileData(fileData, dataResponse, response[i])
      } catch (error) {
        console.warn('Omitiendo archivo debido a un error')
        // console.error(error)
      }
    }

    console.timeEnd('Parseo de archivos')

    res.status(200).json(dataResponse)
  } catch (error) {
    console.warn('Error al obtener los nombres de los archivos de la API externa')
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
