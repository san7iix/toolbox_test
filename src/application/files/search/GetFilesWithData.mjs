import CustomFile from '../../../domain/File.mjs'
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
      const fileData = fileDataResults[i]
      // Este codigo se repite, puede ir en un helper o en un servicio
      if (fileData) {
        const splitedData = fileData.split('\n')
        if (Array.isArray(splitedData)) {
          splitedData.shift()
        }
        for (let j = 0; j < splitedData.length; j++) {
          try {
            const fileDataParsed = new CustomFile()
            fileDataParsed.parseFileData(splitedData[j])
            dataResponse.push(fileDataParsed)
          } catch (error) {
            console.warn('Omitiendo archivo: ' + response[i] + ' debido a un error')
          }
        }
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
